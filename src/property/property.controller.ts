import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import Controller from '../interfaces/controller';

class PropertyController implements Controller {
    public path = '/property';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', async (req: Request, res: Response, next: NextFunction) => {
            if (!req.query.at) {
                // Validate
                res.status(400);
                next(new Error('Required query params missing'));
                return;
            }

            res.set('Content-Type', 'application/json');

            try {
                res.send({ok: true});
            } catch (err) {
                res.send(err);
            }
        });

        this.router.get('/:id/bookings', async (req: Request, res: Response) => {
            res.set('Content-Type', 'application/json');

            try {
                res.send({ok: true});
            } catch (err) {
                res.send(err);
            }
        });
    }
}

export default PropertyController;
