import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema"

const sql = neon(
   
    process.env.DATABASE_URL ||'postgresql://Expense%20Tracker_owner:u3ypwIiKZdJ2@ep-wild-term-a5li8qiv.us-east-2.aws.neon.tech/Expense%20Tracker?sslmode=require'
)

export const db =drizzle(sql, {schema});