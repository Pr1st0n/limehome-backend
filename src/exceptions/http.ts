export class HttpException extends Error {
    public status: number;
    public message: string;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export class UnauthorizedException extends HttpException {
    constructor() {
        super(401, 'Authentication token missing');
    }
}
