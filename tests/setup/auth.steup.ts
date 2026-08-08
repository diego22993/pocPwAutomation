// tests/setup/auth.setup.ts
import { test as setup, expect } from "../../src/fixtures/page.fixture";

const authFile = "playwright/.auth/user.json";
setup.use({ storageState: { cookies: [], origins: [] } });

setup("Autenticar usuario", async ({ loginPage, page }) => {
  // 1. Navegar e iniciar sesión
  await loginPage.navigateTo();
  await loginPage.login("standard_user", "secret_sauce");

  // 2. Esperar a que la página de inventario cargue
  await page.waitForURL("**/inventory.html");

  // 3. Guardar el estado de autenticación en el archivo JSON
  //await page.context().storageState({ path: authFile });
});
