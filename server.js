import express from 'express';

export class Server {
    constructor(
        port,
        routes
    ) {
        this.port = port;
        this.routes = routes;
        this.app = express();
    }

    async start() {
        this.app.use("/",this.routes);
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}