import dotenv from "dotenv";
import * as path from "path";
import Database from "./Database";
import Express from "./Express";
import Queue from "./Queue";

class App {
    public loadConfiguration() {
        dotenv.config({path: path.join(__dirname, '../../.env')});
    }

    public loadQueue() {
        Queue.init()
    }

    public loadDatabase() {
        Database.init()
    }

    public loadServer() {
        Express.init()
    }
}

export default new App