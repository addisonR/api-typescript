import dotenv from "dotenv";
dotenv.config();

class Config {
  //SERVER
  private SERVER_PORT: string;
  //DATABASE
  private DB_HOST: string;
  private DB_PORT?: string;
  private DB_USER: string;
  private DB_PASSWORD: string;
  private DB_DATABASE: string;

  constructor() {
    this.SERVER_PORT = process.env.SERVER_PORT || "4000";
    this.DB_HOST = process.env.DB_HOST || "localhost";
    this.DB_PORT = process.env.DB_PORT || "3308";
    this.DB_USER = process.env.DB_USER || "root";
    this.DB_PASSWORD = process.env.DB_PASSWORD || "";
    this.DB_DATABASE = process.env.DB_DATABASE || "dbtest";
  }

  /* GETTERS */
  get getSERVER_PORT() {
    return this.SERVER_PORT;
  }

  get getDB_HOST() {
    return this.DB_HOST;
  }

  get getDB_PORT() {
    return this.DB_PORT;
  }

  get getDB_USER() {
    return this.DB_USER;
  }

  get getDB_PASSWORD() {
    return this.DB_PASSWORD;
  }

  get getDB_DATABASE() {
    return this.DB_DATABASE;
  }
}

export default Config;
