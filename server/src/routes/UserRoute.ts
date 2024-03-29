import { Router } from 'express';
import UserController from '../controllers/UserController';

class UserRoute {
    public router = Router();

    private path = '/user';

    constructor() {
        this.init();
    }

    private init = () => {
        this.router
            .get(this.path, UserController.getUser)
            .post(this.path, UserController.createUser);
    };
}

export default new UserRoute();
