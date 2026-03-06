import http from "http";
import WebSocket, { WebSocketServer } from "ws";
import * as Y from "yjs";
import { setPersistence, setupWSConnection } from "y-websocket";

const port = process.env.PORT || 1234;

const server = http.createServer();

const wss = new WebSocketServer({
  server
});

wss.on("connection", (conn, req) => {
  setupWSConnection(conn, req);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Yjs websocket server running on port ${port}`);
});