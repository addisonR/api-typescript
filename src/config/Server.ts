import express, { type Application } from "express";
import Config from "./Config.js";

class Server {
  private app: Application;
  private port: string;
  private config: Config = new Config();

  constructor() {
    this.app = express();
    this.port = this.config.getSERVER_PORT;
    this.middleware;
  }

  private middleware() {
    this.app.use(express.json());
  }

  liste() {
    this.app.listen(this.port, () => {
      console.log(`server in http://localhost:${this.port}`);
    });
  }
}

export default Server;
