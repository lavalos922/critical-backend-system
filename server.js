const express = require("express");
const { WebSocketServer } = require("ws");
const usageRoutes = require("./routes/usage");
const { handleWebSocketConnection } = require("./services/captioningService");
const { PORT, WS_PORT } = require("./config");

const app = express();

app.use(express.json());

app.use("/usage", usageRoutes);

const wss = new WebSocketServer({ port: WS_PORT });
wss.on("connection", handleWebSocketConnection);

app.listen(PORT, () => {
  console.log(`REST API running on http://localhost:${PORT}`);
  console.log(`WebSocket Server running on ws://localhost:${WS_PORT}`);
})