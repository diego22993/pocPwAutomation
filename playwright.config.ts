// playwright.config.ts
import { defineConfig, devices } from "@playwright/test";
import { Config } from "./config/env/env.config";

export default defineConfig({
  testDir: "./tests",

  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium",
      use: {
        baseURL: Config.BASE_URL || "http://localhost:3000",

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",
        ...devices["Desktop Chrome"],
        storageState: "playwright/.auth/user.json",
      },

      dependencies: ["setup"],
    },
  ],
});
