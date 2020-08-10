#!/usr/bin/env sh
npx knex migrate:rollback
npx knex migrate:latest
npx knex seed:run --specific="test.js"