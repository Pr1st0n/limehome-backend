import { ConnectionOptions } from 'typeorm';

const entities = process.env.TS_NODE ? 'src/**/*.entity.ts' : 'build/**/*.entity.js';
const config: ConnectionOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [entities]
};

export = config;