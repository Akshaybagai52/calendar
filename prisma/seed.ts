// const db = require("../lib/db");
import db from '../lib/db'

const users = [
  { name: "John Doe", email: "john.doe@example.com",password:"pradeep" },
  { name: "Jane Doe", email: "jane.doe@example.com",password:"pradeep" }
];

async function seed() {
  for (const user of users) {
    await db.user.create({ data: user });
  }
}

seed().catch(console.error);