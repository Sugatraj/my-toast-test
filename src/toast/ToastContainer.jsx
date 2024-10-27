import React, { forwardRef, useImperativeHandle, useState } from "react";
import { ToastMessage } from "./ToastMessage";
import "./Toast.css";

export const ToastContainer = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);

  useImperativeHandle(ref, () => ({
    addToast: (type, message, options = {}) => {
      const newToast = {
        id: Date.now().toString(),
        type,
        message,
        life: options.life || 3000,
        closable: options.closable ?? true,
        icon: options.icon || null,
        position: options.position, // Pass individual position
      };
      setToasts((prev) => [...prev, newToast]);
    },
  }));

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Separate toasts by position
  const renderToastsByPosition = (position) => {
    return toasts
      .filter((toast) => toast.position === position)
      .map((toast) => (
        <ToastMessage
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ));
  };

  return (
    <>
      <div className="toast-container top-right">
        {renderToastsByPosition("top-right")}
      </div>
      <div className="toast-container top-left">
        {renderToastsByPosition("top-left")}
      </div>
      <div className="toast-container bottom-right">
        {renderToastsByPosition("bottom-right")}
      </div>
      <div className="toast-container bottom-left">
        {renderToastsByPosition("bottom-left")}
      </div>
    </>
  );
});

ToastContainer.displayName = "ToastContainer";
