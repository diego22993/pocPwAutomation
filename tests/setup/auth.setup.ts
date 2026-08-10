// tests/setup/auth.setup.ts
import { Config } from "../../config/env/env.config";
import { AUTH_FILE } from "../../src/constants/path";
import { test as setup } from "../../src/fixtures/page.fixture";

setup.use({ storageState: { cookies: [], origins: [] } });

setup("Autenticar usuario", async ({ loginPage, page }) => {
  await loginPage.navigateTo();
  await loginPage.login(Config.TEST_USER, Config.TEST_PASS);

  await page.waitForURL("**/inventory.html");

  await page.waitForFunction(() =>
    document.cookie.includes("session-username"),
  );

  await page.context().storageState({ path: AUTH_FILE });
});
