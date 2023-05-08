import {Redis} from "@upstash/redis"
import dotenv from "dotenv"

dotenv.config()

const url = process.env.UPSTASH_REDIS_REST_URL!;
const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

export const db = new Redis({
  url,
  token
})