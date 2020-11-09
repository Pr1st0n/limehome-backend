import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../exceptions/http';

function errorMiddleware(err: HttpException, req: Request, res: Response, next: NextFunction): void {
    const status = err.status || 500;
    const message = err.message || 'Unexpected error';
    res.status(status)
        .send({
            message,
            status,
        });
}

export default errorMiddleware;
