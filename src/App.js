import React from "react";
import Toast from "./toast/Toast";
import ToastService from "./toast/ToastService";

function App() {
  const showSuccessToastTopRight = () => {
    ToastService.success("This is spark note toasts", {
      position: "top-right",
    });
  };

  const showInfoToastTopLeft = () => {
    ToastService.info("This is spark note toasts", {
      position: "top-left",
    });
  };

  const showWarningToastBottomRight = () => {
    ToastService.warning("This is spark note toasts", {
      position: "bottom-right",
    });
  };

  const showErrorToastBottomLeft = () => {
    ToastService.error("This is spark note toasts", {
      position: "bottom-left",
    });
  };

  return (
    <>
      <Toast position="top-right" /> {/* Default position */}
      <div className="App">
        <h1>Test Toast Positions</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button onClick={showSuccessToastTopRight}>
            Show Success Toast (Top Right)
          </button>
          <button onClick={showInfoToastTopLeft}>
            Show Info Toast (Top Left)
          </button>
          <button onClick={showWarningToastBottomRight}>
            Show Warning Toast (Bottom Right)
          </button>
          <button onClick={showErrorToastBottomLeft}>
            Show Error Toast (Bottom Left)
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
