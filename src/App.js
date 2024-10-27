import React from "react";
import { ToastProvider } from "./toast/ToastProvider";
import ToastService from "./toast/ToastService";
import "./toast/Toast.css";

function App() {
  const showCustomToast = () => {
    ToastService.success("This is a success toast!", {
      life: 5000,
      position: "bottom-left", // Overrides container position
      closable: true,
      icon: "ri-star-line",
    });
  };

  return (
    <ToastProvider position="top-right">
      {" "}
      {/* Default position */}
      <div className="App">
        <h1>Customizable Toast Test</h1>
        <button onClick={() => ToastService.success("Success message!")}>
          Success
        </button>
        <button onClick={() => ToastService.error("Error message!")}>
          Error
        </button>
        <button onClick={() => ToastService.info("Info message!")}>Info</button>
        <button onClick={() => ToastService.warning("Warning message!")}>
          Warning
        </button>
        <button onClick={showCustomToast}>Show Custom Position Toast</button>
      </div>
    </ToastProvider>
  );
}

export default App;
