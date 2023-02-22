import { Server } from './src/server';

new Server(process.env.PORT || 3003).start();
