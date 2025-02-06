

/** @type { import("drizzle-kit").Config } */
import * as dotenv from 'dotenv';
dotenv.config({path: '.env.local'}); // Load environment variables from .env.local file
const DB_PATH = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;


export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://mockInterview_owner:QR1I5CKZvjnu@ep-floral-base-a5eg8xi7.us-east-2.aws.neon.tech/mockInterview?sslmode=require',
    },
};
