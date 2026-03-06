import http from "http";
import { WebSocketServer } from "ws";
import { setupWSConnection } from "y-websocket/bin/utils.js";

const port = process.env.PORT || 1234;

const server = http.createServer();
const wss = new WebSocketServer({ server });

wss.on("connection", (conn, req) => {
  setupWSConnection(conn, req);
});

server.listen(port, () => {
  console.log(`Yjs server running at ws://localhost:${port}`);
});