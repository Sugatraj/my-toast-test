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

  return (
    <>
      {toasts.map((toast) => (
        <ToastMessage
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </>
  );
});

ToastContainer.displayName = "ToastContainer";
