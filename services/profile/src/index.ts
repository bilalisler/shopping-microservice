import App from "./Modules/App";

/**
 * Load Configuration
 */
App.loadConfiguration();

/**
 * Loads the Queue Monitor iff enabled
 */
App.loadQueue();

/**
 * Run the Database pool
 */
App.loadDatabase();

/**
 * Run the Server on Clusters
 */
App.loadServer();