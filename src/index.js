import React from "react";
import ReactDOM from "react-dom/client"; // ✅ React 18 import
import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("❌ No root element found! Check your index.html file.");
}
