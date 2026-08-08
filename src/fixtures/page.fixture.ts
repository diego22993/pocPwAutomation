import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";

type FrameworkFixtures = {
  loginPage: LoginPage;
};


export const test = base.extend<FrameworkFixtures>({
  loginPage: async ({ page }, use) => {
    // Instanciación automática
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

// Re-exportamos 'expect' para consumirlo de un único punto
export { expect } from "@playwright/test";
