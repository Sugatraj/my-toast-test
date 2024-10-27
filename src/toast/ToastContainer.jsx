import React, { forwardRef, useImperativeHandle, useState } from "react";
import { ToastMessage } from "./ToastMessage";
import "./Toast.css";

export const ToastContainer = forwardRef(({ position = "top-right" }, ref) => {
  const [toasts, setToasts] = useState([]);

  useImperativeHandle(ref, () => ({
    addToast: (type, message, options = {}) => {
      const newToast = {
        id: Date.now().toString(),
        type,
        message,
        life: options.life || 3000,
        closable: options.closable ?? true,
        customIcon: options.icon || null,
        className: options.className || "",
        position: options.position || position, // Use individual position if provided, otherwise default
      };
      setToasts((prev) => [...prev, newToast]);
    },
  }));

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <ToastMessage
          key={toast.id}
          id={toast.id}
          type={toast.type}
          message={toast.message}
          life={toast.life}
          closable={toast.closable}
          onClose={removeToast}
          icon={toast.customIcon}
          className={toast.className}
          position={toast.position}
          index={index} // Pass index for dynamic spacing
          total={toasts.length}
        />
      ))}
    </div>
  );
});

ToastContainer.displayName = "ToastContainer";
