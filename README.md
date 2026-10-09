# CloudPulse — Real-Time Cloud Application Monitoring & Alert Platform

CloudPulse is a web-based application monitoring dashboard designed to display application health, performance metrics, and alerts in a simple, easy-to-understand interface.

## Features

* **Application Monitoring:** View the current application status.
* **CPU Usage:** Monitor simulated CPU usage metrics.
* **Memory Usage:** Monitor simulated memory usage metrics.
* **Response Time:** View simulated API response times.
* **Backend Health Check:** Check whether the backend server is responding.
* **Automatic Refresh:** Update metrics automatically every 3 seconds.
* **Alerts & Notifications:** Display warnings when metrics exceed configured thresholds.
* **Uptime Display:** Show a demonstration uptime value.

## Technologies Used

**Frontend**

* React
* Vite
* JavaScript
* CSS

**Backend**

* Node.js
* Express.js
* CORS

## Project Structure

```text
cloudpulse/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── server.js
├── package.json
├── index.html
└── README.md
```

## Getting Started

### Prerequisites

Install Node.js and npm on your computer.

### 1. Clone the repository

```bash
git clone https://github.com/Jameera7/cloudpulse-.git
cd cloudpulse-
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
npm install express cors
```

### 4. Start the backend server

Open a terminal in the project folder and run:

```bash
node server.js
```

The backend server runs at:

`http://localhost:3000`

Available endpoints:

* `/` — Basic server information
* `/health` — Application health status
* `/metrics` — Demonstration performance metrics

### 5. Start the frontend

Open a second terminal in the same project folder and run:

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal, usually `http://localhost:5173`.

## How Alerts Work

CloudPulse displays warnings when demonstration metrics exceed these thresholds:

* CPU usage: 80% or higher
* Memory usage: 80% or higher
* Response time: 500 ms or higher

## Important Note

This project currently uses simulated CPU, memory, and response-time metrics for demonstration purposes. These values do not represent actual cloud infrastructure monitoring. The uptime displayed on the dashboard is also a demonstration value.

## Future Improvements

* Connect to real infrastructure monitoring services.
* Add historical metrics charts.
* Store metrics in a database.
* Implement configurable alerts and notifications.
* Add user authentication.
* Deploy the frontend and backend online.

## Author

**Jameera7**

## License

No license has been specified yet.
