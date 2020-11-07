import express from 'express';
import logger from 'morgan';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import authMiddleware from './middleware/auth';
import errorMiddleware from './middleware/error';
import Controller from './interfaces/controller';

class App {
    public app: express.Application;

    constructor(controllers: Controller[]) {
        this.app = express();

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    public listen(): void {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }

    public getServer(): express.Application {
        return this.app;
    }

    private initializeMiddlewares() {
        this.app.use(logger('dev'));
        this.app.use(authMiddleware);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use(controller.path, controller.router);
        });
        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }
}
const app = express();

export default App;
