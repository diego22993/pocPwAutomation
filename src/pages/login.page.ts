import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.userNameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.submitButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async login(user: string, pass: string): Promise<void> {
    await this.fillInput(this.userNameInput, user);
    await this.fillInput(this.passwordInput, pass);
    await this.clickElement(this.submitButton);
  }
}
