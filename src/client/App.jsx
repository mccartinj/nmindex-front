import { useState } from "react";
import "./App.css";
import { Router, Link } from "wouter";
import PageRouter from "./components/router.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>
    </Router>
  );
}

export default App;
