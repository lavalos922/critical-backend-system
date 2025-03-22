const loremIpsum = [
  "Lorem ipsum dolor sit amet...",
  "Consectetur adipiscing elit...",
  "Sed do diusmod tempor incididunt...",
  "Ut labore et dolore magna aliqua..."
];

function generateCation() {
  return loremIpsum[Math.floor(Math.random() * loremIpsum.length)];
}

module.exports = { generateCation };