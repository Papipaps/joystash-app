import { Client } from "pg";

export const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "joystash",
  password: "joystashpassword",
  port: 5432,
});


