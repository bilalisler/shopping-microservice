import App from "./Modules/App";

(async () => {
    /**
     * Load Configuration
     */
    App.loadConfiguration();

    /**
     * Loads the Queue Monitor iff enabled
     */
    App.loadQueue();

    /**
     * Run the Redis pool
     */
    // await App.loadRedis();

    /**
     * Run the Database pool
     */
    App.loadDatabase();

    /**
     * Run the Server on Clusters
     */
    App.loadServer();
})()