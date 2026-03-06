import http from "http";
import { WebSocketServer } from "ws";
import { setupWSConnection } from "y-websocket/bin/utils.cjs";

const port = process.env.PORT || 1234;

const server = http.createServer();

const wss = new WebSocketServer({ server });

wss.on("connection", (conn, req) => {
  setupWSConnection(conn, req);
});

server.listen(port, "0.0.0.0", () => {
  console.log("Yjs websocket running on port", port);
});