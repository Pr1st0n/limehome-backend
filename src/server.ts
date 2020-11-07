import 'dotenv/config';
import App from './app';
import PropertyController from './property/property.controller';
import BookingController from './booking/booking.controller';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([
    new PropertyController(),
    new BookingController(),
]);

app.listen();
