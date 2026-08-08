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
}

export const Config: AppConfig = {
  BASE_URL: process.env.BASE_URL || "https://qa.example.com",
  API_URL: process.env.API_URL || "https://api-qa.example.com",
  TIMEOUT: process.env.TIMEOUT ? parseInt(process.env.TIMEOUT) : 30000,
};
