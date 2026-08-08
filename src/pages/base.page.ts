import { Page, Locator } from "@playwright/test";

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navega a una ruta relativa usando la baseURL del entorno
   */
  async navigateTo(path: string = "/"): Promise<void> {
    await this.page.goto(path);
  }

  /**
   * Wrapper seguro para hacer clic esperando visibilidad previa
   */
  async clickElement(locator: Locator): Promise<void> {
    await locator.waitFor({ state: "visible" });
    await locator.click();
  }

  /**
   * Wrapper seguro para rellenar campos de texto
   */
  async fillInput(locator: Locator, value: string): Promise<void> {
    await locator.waitFor({ state: "visible" });
    await locator.fill(value);
  }
}
