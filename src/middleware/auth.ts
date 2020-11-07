import { Request, Response, NextFunction } from 'express';
import { UnauthorizedException } from '../exceptions/http';

function authMiddleware(request: Request, response: Response, next: NextFunction): void {
    const secret = process.env.SECRET;

    if (secret === request.header('x-api-key')) {
        next();
    } else {
        next(new UnauthorizedException());
    }
}

export default authMiddleware;