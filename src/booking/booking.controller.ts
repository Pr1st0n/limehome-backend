import * as express from 'express';
import { Request, Response } from 'express';
import Controller from '../interfaces/controller';

class BookingController implements Controller {
    public path = '/booking';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', async (req: Request, res: Response) => {
            res.set('Content-Type', 'application/json');
            res.send({ ok: true });
        });
    }
}

export default BookingController;
