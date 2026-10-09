import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
res.json({
project: "CloudPulse",
message: "Monitoring server is running",
status: "Online",
timestamp: new Date().toISOString(),
});
});

app.get("/health", (req, res) => {
res.json({
status: "Healthy",
message: "Application is responding",
timestamp: new Date().toISOString(),
});
});

app.get("/metrics", (req, res) => {
  res.json({
    cpuUsage: Math.floor(Math.random() * 60) + 20,
    memoryUsage: Math.floor(Math.random() * 50) + 30,
    responseTime: Math.floor(Math.random() * 200) + 100,
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
console.log(`CloudPulse server running at http://localhost:${PORT}`);
});