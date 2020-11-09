import * as express from 'express';
import { Request, Response } from 'express';
import Controller from '../interfaces/controller';
import { getRepository } from 'typeorm';
import Booking from './booking.entity';
import CreateBookingDto from './booking.dto';
import validationMiddleware from '../middleware/validate';

class BookingController implements Controller {
    public path = '/booking';
    public router = express.Router();
    private bookingRepository = getRepository(Booking);

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.put('/', validationMiddleware(CreateBookingDto), this.createBooking);
    }

    private createBooking = async (req: Request, res: Response) => {
        const data: CreateBookingDto = req.body;
        const booking = this.bookingRepository.create(data);
        await this.bookingRepository.save(booking);
        res.send(booking);
    }
}

export default BookingController;
