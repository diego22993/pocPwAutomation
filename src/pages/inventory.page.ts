// src/pages/inventory.page.ts
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export type SortOption = "az" | "za" | "lohi" | "hilo";

export class InventoryPage extends BasePage {
  readonly lblAppLogo: Locator;
  readonly filterSortProduct: Locator;
  readonly lblProductNames: Locator;
  readonly lblProductPrices: Locator;

  constructor(page: Page) {
    super(page);
    this.lblAppLogo = page.locator(".app_logo");
    this.filterSortProduct = page.locator(
      '[data-test="product-sort-container"]',
    );

    this.lblProductNames = page.locator('[data-test="inventory-item-name"]');
    this.lblProductPrices = page.locator('[data-test="inventory-item-price"]');
  }

  async sortProductsBy(option: SortOption): Promise<void> {
    await this.filterSortProduct.selectOption(option);
  }

  /**
   * Obtiene la lista con todos los nombres de los productos visibles.
   */
  async getAllProductNames(): Promise<string[]> {
    return await this.lblProductNames.allTextContents();
  }

  /**
   * Obtiene la lista con todos los precios convertidos a número.
   * Remueve el símbolo "$" para poder comparar numéricamente.
   */
  async getAllProductPrices(): Promise<number[]> {
    const rawPrices = await this.lblProductPrices.allTextContents();
    return rawPrices.map((price) => parseFloat(price.replace("$", "")));
  }
}
