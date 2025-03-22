const express = require("express");
const { getUsage } = require("../storage/usageStore");

const router = express.Router();

router.get("/:clientId", (req, res) => {
  const clientId = req.params.clientId.trim();
  if (!clientId) {
    return res.status(400).json({ error: "Client ID is required" });
  }

  res.json({ clientId, usageMs: getUsage(clientId) });
});

module.exports = router;