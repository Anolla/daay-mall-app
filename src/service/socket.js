import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:3001';

export let socket;

export const test = (query) => (socket = io.connect(ENDPOINT, { query }));
// io(ENDPOINT);

// import io from "socket.io-client";
// import { SOCKET_URL } from "config";

// export const socket = io(SOCKET_URL);
