import Config from "../config/Config.js";
import { Sequelize } from "sequelize";

class DbConfig {
  private config: Config = new Config();
  private host: string;
  private user: string;
  private password: string;
  private database: string;

  constructor() {
    this.host = this.config.getDB_HOST;
    this.user = this.config.getDB_USER;
    this.password = this.config.getDB_PASSWORD;
    this.database = this.config.getDB_DATABASE;
  }

  dbConect(): Sequelize {
    const sequelize = new Sequelize(this.database, this.user, this.password, {
      host: this.host,
      dialect: "mysql",
    });
    return sequelize;
  }

  async dbTest() {
    const connect = this.dbConect();
    try {
      await connect.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

export default DbConfig;
