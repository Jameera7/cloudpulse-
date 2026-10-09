import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [apiMetrics, setApiMetrics] = useState(null);

useEffect(() => {
  const checkBackend = () => {
    fetch("http://localhost:3000/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((data) => setBackendStatus(data.status))
      .catch(() => setBackendStatus("Offline"));

    fetch("http://localhost:3000/metrics")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Metrics error");
        }
        return response.json();
      })
      .then((data) => {
        setApiMetrics({
          cpu: data.cpuUsage,
          memory: data.memoryUsage,
          response: data.responseTime,
          uptime: 99.9,
        });
      })
      .catch((error) => console.error("Metrics fetch failed:", error));
  };

  checkBackend();
  const timer = setInterval(checkBackend, 3000);

  return () => clearInterval(timer);
}, []);

  const [metrics, setMetrics] = useState({
    cpu: 42,
    memory: 58,
    response: 184,
    uptime: 99.9,
  });

  const [alerts, setAlerts] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());

 useEffect(() => {
  if (apiMetrics) {
    setMetrics(apiMetrics);
    setLastUpdated(new Date());
  }
}, [apiMetrics]);

  useEffect(() => {
    const newAlerts = [];

    if (metrics.cpu >= 80) {
      newAlerts.push("High CPU usage detected!");
    }

    if (metrics.memory >= 80) {
      newAlerts.push("High memory usage detected!");
    }

    if (metrics.response >= 500) {
      newAlerts.push("High response time detected!");
    }

    setAlerts(newAlerts);
  }, [metrics]);

  const systemStatus = alerts.length > 0 ? "Warning" : "Healthy";

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>CloudPulse</h1>
          <p>Real-Time Cloud Application Monitoring</p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Monitoring Active
        </div>
      </header>

      <main className="dashboard">
        <section className="welcome">
          <div>
            <h2>Application Overview</h2>
            <p>
              Monitor application performance and detect potential issues.
            </p>
          </div>

          <div className="health">
            <span>Application Status</span>
            <strong
              style={{
                color: systemStatus === "Healthy" ? "#16a34a" : "#dc2626",
              }}
            >
              {systemStatus}
            </strong>
          </div>
        </section>

        <section className="cards">
          <div className="card">
            <p>CPU Usage</p>
            <h3>{metrics.cpu}%</h3>
            <span>{metrics.cpu >= 80 ? "High Usage" : "Normal"}</span>
          </div>

          <div className="card">
            <p>Memory Usage</p>
            <h3>{metrics.memory}%</h3>
            <span>{metrics.memory >= 80 ? "High Usage" : "Normal"}</span>
          </div>

          <div className="card">
            <p>Response Time</p>
            <h3>{metrics.response} ms</h3>
            <span>
              {metrics.response >= 500 ? "Slow Response" : "Normal"}
            </span>
          </div>

          <div className="card">
            <p>Uptime</p>
            <h3>{metrics.uptime}%</h3>
            <span>Demonstration Value</span>
          </div>
        </section>

        <section className="monitor">
          <h2>Monitoring Status</h2>

          <div className="monitor-row">
            <div>
              <strong>CloudPulse Monitoring Demo</strong>
              <p>Metrics refresh automatically every 3 seconds.</p>
              <p>Last updated: {lastUpdated.toLocaleTimeString()}</p>
            </div>
          </div>
        </section>

        <section className="monitor">
          <h2>Backend Connection</h2>
          <div className="monitor-row">
            <div>
              <strong>Server Status: </strong>
              <span>{backendStatus}</span>
            </div>
           </div>
        </section>

        <section className="monitor">
          <h2>Alerts & Notifications</h2>

          {alerts.length === 0 ? (
            <p className="alert-success">
              All monitored demonstration metrics are within normal limits.
            </p>
          ) : (
            alerts.map((alert, index) => (
              <p className="alert-danger" key={index}>
                ⚠️ {alert}
              </p>
            ))
          )}
        </section>
      </main>
    </div>
  );
}

export default App;