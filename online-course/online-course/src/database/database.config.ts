import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/databaseConfig.interface';

dotenv.config();

export const databaseConfig:IDatabaseConfig={
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    urlDatabase: process.env.DB_URLDATABASE
}