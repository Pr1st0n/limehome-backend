import 'dotenv/config';
import 'reflect-metadata';
import App from './app';
import * as config from './ormconfig';
import { createConnection } from 'typeorm';
import PropertyController from './property/property.controller';
import BookingController from './booking/booking.controller';
import validateEnv from './utils/validateEnv';

validateEnv();

(async () => {
    try {
        const connection = await createConnection(config);
        await connection.runMigrations();
    } catch (error) {
        console.log('Error while connecting to the database', error);
        return error;
    }
    const app = new App([
        new PropertyController(),
        new BookingController()
    ]);
    app.listen();
})();