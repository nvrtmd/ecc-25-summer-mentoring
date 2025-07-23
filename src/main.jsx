import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { worker } from "./mocks/browser.js";

if (import.meta.env.PROD) {
  createRoot(document.getElementById("root")).render(
    <div>
      <App />
    </div>
  );
} else {
  worker.start().then(() => {
    createRoot(document.getElementById("root")).render(
      <div>
        <App />
      </div>
    );
  });
}
