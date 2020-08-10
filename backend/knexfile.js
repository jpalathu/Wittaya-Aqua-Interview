module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.DB_HOST || "postgres",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "FishDev123",
      database: process.env.DB_NAME || "test_database",
      port: process.env.DB_PORT || "5432",
    },
    migrations: { directory: "database/migrations" },
    seeds: { directory: "database/seeds" },
  }
};
