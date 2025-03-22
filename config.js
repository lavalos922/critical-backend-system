require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  WS_PORT: process.env.WS_PORT || 8080,
  MAX_USAGE_MS: process.env.MAX_USAGE_MS || 60000,
  CAPTION_INTERVAL_MS: process.env.CAPTION_INTERVAL_MS || 500
};