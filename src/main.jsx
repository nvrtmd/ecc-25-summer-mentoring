import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { worker } from "./mocks/browser.js";

if (import.meta.env.VITE_NODE_ENV === "development") {
  worker.start().then(() => {
    createRoot(document.getElementById("root")).render(
      <div>
        <App />
      </div>
    );
  });
} else {
  // 프로덕션에서 워커 없이 실행
  createRoot(document.getElementById("root")).render(
    <div>
      <App />
    </div>
  );
}
