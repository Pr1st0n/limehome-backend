import { Request, Response, NextFunction } from 'express';
import { UnauthorizedException } from '../exceptions/http';

function authMiddleware(req: Request, res: Response, next: NextFunction): void {
    const secret = process.env.SECRET;

    if (secret === req.header('x-api-key')) {
        next();
    } else {
        next(new UnauthorizedException());
    }
}

export default authMiddleware;