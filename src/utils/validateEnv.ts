import { cleanEnv, port, str } from 'envalid';

function validateEnv(): void {
    cleanEnv(process.env, {
        PORT: port(),
        SECRET: str()
    });
}

export default validateEnv;
