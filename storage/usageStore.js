const usageData = {};

function incrementUsage(clientId, ms) {
  if (!usageData[clientId]) {
    usageData[clientId] = 0;
  }
  usageData[clientId] = Number(usageData[clientId]) + Number(ms);
}

function getUsage(clientId) {
  return usageData[clientId] || 0;
}

module.exports = { incrementUsage, getUsage };