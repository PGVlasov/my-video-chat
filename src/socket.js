import { io } from "socket.io-client";

const options = {
  "force new connetions": true,
  reconnectionAttemps: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

export const socket = io("http://localhost:3011", options);
