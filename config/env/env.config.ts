import dotenv from "dotenv";
import path from "path";

const environment = process.env.ENV || "qa";

dotenv.config({
  path: path.resolve(__dirname, `.env.${environment}`),
});

export interface AppConfig {
  BASE_URL: string;
  API_URL: string;
  TIMEOUT: number;
  TEST_USER: string;
  TEST_PASS: string;
}

export const Config: AppConfig = {
  BASE_URL: process.env.BASE_URL || "https://www.saucedemo.com",
  API_URL: process.env.API_URL || "",
  TIMEOUT: process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : 30000,
  TEST_USER: process.env.TEST_USER || "",
  TEST_PASS: process.env.TEST_PASS || "",
};
