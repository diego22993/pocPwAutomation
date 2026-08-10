// playwright.config.ts
import { defineConfig, devices } from "@playwright/test";
import { Config } from "./config/env/env.config";
import { AUTH_FILE } from "./src/constants/path";

export default defineConfig({
  testDir: "./tests",

  use: {
    baseURL: Config.BASE_URL || "https://www.saucedemo.com",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: AUTH_FILE,
      },

      dependencies: ["setup"],
    },
  ],
});
