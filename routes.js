import { Router } from 'express';
import { Controller } from './controller.js';

export class Routes {
    constructor() {
        this.router = Router();
        this.controller = new Controller();
    }

    getHomeRoute() {
        this.router.get('/', this.controller.getHome);
    }

    getAboutRoute() {
        this.router.get('/about', this.controller.getAbout);
    }

    getContactRoute() {
        this.router.get('/contact', this.controller.getContact);
    }

    static get getRoutes() {
        const routes = new Routes();
        routes.getHomeRoute();
        routes.getAboutRoute();
        routes.getContactRoute();
        return routes.router;
    }
}