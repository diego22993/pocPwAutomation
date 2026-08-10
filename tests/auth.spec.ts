import { test, expect } from "../src/fixtures/page.fixture";

test.describe("Módulo de Autenticación", () => {
  test("Inicio de sesión exitoso @smoke @sanity", async ({ loginPage }) => {
    await loginPage.navigateTo();

    //await loginPage.login("standard_user", "secret_sauce");
  });

  test("Validación de error con credenciales inválidas @regression", async ({
    loginPage,
  }) => {
    await loginPage.navigateTo();
    await loginPage.login("locked_out_user", "secret_sauce");
    const errorMessageExpected =
      "Epic sadface: Sorry, this user has been locked out.";
    await expect(loginPage.errorMessage).toHaveText(errorMessageExpected);
  });

  //test.use({ storageState: { cookies: [], origins: [] } });

  test.describe("Módulo de Autenticación - Pruebas Limpias", () => {
    test("Validación de error con credenciales inválidas @regression", async ({
      loginPage,
    }) => {
      await loginPage.navigateTo();
      await loginPage.login("locked_out_user", "secret_sauce");
      await expect(loginPage.errorMessage).toContainText(
        "Sorry, this user has been locked out.",
      );
    });
  });
});
