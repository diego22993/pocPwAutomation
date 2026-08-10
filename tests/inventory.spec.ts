import { test, expect } from "../src/fixtures/page.fixture";

test.describe("Módulo de Inventario / Ordenamiento", () => {
  test.beforeEach(async ({ inventoryPage }) => {
    await inventoryPage.navigateTo("inventory.html");
  });

  test("Verificar ordenamiento de A a Z @smoke", async ({ inventoryPage }) => {
    await inventoryPage.sortProductsBy("az");

    expect(inventoryPage.filterSortProduct).toHaveValue("az");

    const actualNames = await inventoryPage.getAllProductNames();
    const expectedNames = [...actualNames].sort();

    expect(actualNames).toEqual(expectedNames);
  });

  test("Verificar ordenamiento de Z a A @regression", async ({
    inventoryPage,
  }) => {
    await inventoryPage.sortProductsBy("za");

    expect(inventoryPage.filterSortProduct).toHaveValue("za");

    const actualNames = await inventoryPage.getAllProductNames();
    const expectedNames = [...actualNames].sort().reverse();

    expect(actualNames).toEqual(expectedNames);
  });

  test("Verificar ordenamiento por precio de Menor a Mayor (Low to High) @regression", async ({
    inventoryPage,
  }) => {
    await inventoryPage.sortProductsBy("lohi");

    expect(inventoryPage.filterSortProduct).toHaveValue("lohi");

    const actualPrices = await inventoryPage.getAllProductPrices();
    const expectedPrices = [...actualPrices].sort((a, b) => a - b);

    expect(actualPrices).toEqual(expectedPrices);
  });

  test("Verificar ordenamiento por precio de Mayor a Menor (High to Low) @regression", async ({
    inventoryPage,
  }) => {
    await inventoryPage.sortProductsBy("hilo");

    expect(inventoryPage.filterSortProduct).toHaveValue("hilo");

    const actualPrices = await inventoryPage.getAllProductPrices();
    const expectedPrices = [...actualPrices].sort((a, b) => b - a);

    expect(actualPrices).toEqual(expectedPrices);
  });
});
