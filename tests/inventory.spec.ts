import { test, expect } from "../src/fixtures/page.fixture";

test.describe("Módulo de Inventario / Ordenamiento", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");
  });

  test("Verificar ordenamiento de A a Z @smoke", async ({ inventoryPage }) => {
    // 1. Aplicar el filtro
    await inventoryPage.sortProductsBy("az");

    // 2. Obtener los nombres en el orden actual desplegado en pantalla
    const actualNames = await inventoryPage.getAllProductNames();

    // 3. Crear una copia y ordenarla alfabéticamente de forma ascendente
    const expectedNames = [...actualNames].sort();

    // 4. Aserción de Playwright comparando ambos arreglos
    expect(actualNames).toEqual(expectedNames);
  });

  test("Verificar ordenamiento de Z a A @regression", async ({
    inventoryPage,
  }) => {
    await inventoryPage.sortProductsBy("za");

    const actualNames = await inventoryPage.getAllProductNames();

    // Crear copia y ordenar de forma descendente (Z-A)
    const expectedNames = [...actualNames].sort().reverse();

    expect(actualNames).toEqual(expectedNames);
  });

  test("Verificar ordenamiento por precio de Menor a Mayor (Low to High) @regression", async ({
    inventoryPage,
  }) => {
    await inventoryPage.sortProductsBy("lohi");

    const actualPrices = await inventoryPage.getAllProductPrices();

    // Crear copia y ordenar números de menor a mayor
    const expectedPrices = [...actualPrices].sort((a, b) => a - b);

    expect(actualPrices).toEqual(expectedPrices);
  });

  test("Verificar ordenamiento por precio de Mayor a Menor (High to Low) @regression", async ({
    inventoryPage,
  }) => {
    await inventoryPage.sortProductsBy("hilo");

    const actualPrices = await inventoryPage.getAllProductPrices();

    // Crear copia y ordenar números de mayor a menor
    const expectedPrices = [...actualPrices].sort((a, b) => b - a);

    expect(actualPrices).toEqual(expectedPrices);
  });
});
