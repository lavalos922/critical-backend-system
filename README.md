# critical-backend-system
This project implements a real-time captioning backend using Node.js and Express.

 - Tech Stack

    Node.js with Express (Backend API)
    We bSocket (ws) for real-time communication
    In-Memory Store for tracking per-client usage

 - Key Features

    Simulated captions are sent every 500ms via WebSocket.
    Usage tracking is based on received packets (each representing 100ms of speech).
    Max usage limit (default: 60 seconds) ensures fair usage.
    Installation & Running the Service

    Install Dependencies

    Make sure you have Node.js (v16+) installed. Then run:
    npm install

    Configure Environment Variables

    Create a .env file (optional) to configure ports and limits:
    PORT=3000
    WS_PORT=8080
    MAX_USAGE_MS=60000  # Maximum 60 seconds per user

    Start the Server

    Run the following command:
    node server.js
    The REST API will start at http://localhost:3000, and the WebSocket server will run at ws://localhost:8080.
    Testing the Endpoints

 - WebSocket Endpoint (Real-Time Captioning)
    Test Using Postman
    Open Postman.
    Create a WebSocket request and connect to:
    ws://localhost:8080
    The connection should be established, and captions should start appearing every 500ms.
    If usage exceeds 60 seconds, the server will send:
    { "error": "Usage limit exceeded" }
    and disconnect the client.
 - REST API Endpoint (Usage Tracking)
    Che ck Client Usage
      Open Postman.
        Send a GET request to:
        http://localhost:3000/usage/<clientId>

      Example:
        http://localhost:3000/usage/<user - token>
    The response should return the total captioning usage for the client:
    ex:
        {
          "clientId": "client123",
          "usageMs": 2100
        }