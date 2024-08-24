import { Routes } from './routes.js';
import { Server } from './server.js';

(async () => {
    await main();
}
)();

async function main() {
    const server = new Server(3000, Routes.getRoutes);
    server.start();
}