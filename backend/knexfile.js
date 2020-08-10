module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "FishDev123",
      database: "postgres",
      port: 5432,
    },
    migrations: { directory: "database/migrations" },
    seeds: { directory: "database/seeds" },
  }
};
