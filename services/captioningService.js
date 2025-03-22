const { generateCation } = require("../utils");
const { incrementUsage, getUsage } = require("../storage/usageStore");
const { MAX_USAGE_MS, CAPTION_INTERVAL_MS } = require("../config");

const users = {

}

function handleWebSocketConnection(ws, req) {

  const clientId = req.headers["sec-websocket-key"];
  console.log("clientId", clientId);

  if (!clientId) {
    ws.close(1008, "Unauthorized");
    return;
  }

  console.log(`Client ${clientId} connected`);

  const interval = setInterval(() => {

    if (getUsage(clientId) >= MAX_USAGE_MS) {
      ws.send(JSON.stringify({ error: "Usage limit exceeded" }));
      ws.close();
      clearInterval(interval);
      return;
    }

    incrementUsage(clientId, CAPTION_INTERVAL_MS);
    ws.send(JSON.stringify({ caption: generateCation() }));
  }, CAPTION_INTERVAL_MS);

  ws.on('close', () => {
    console.log(`Client ${clientId} disconnected`);
    clearInterval(interval);
  });
}

module.exports = { handleWebSocketConnection };