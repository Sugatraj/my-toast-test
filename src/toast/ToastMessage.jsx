import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

export const ToastMessage = ({
  id,
  type,
  message,
  onClose,
  life = 3000,
  closable = true,
  icon,
  position = "top-right",
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const activate = requestAnimationFrame(() => {
      setIsActive(true);
    });

    const timer = setTimeout(() => {
      handleClose();
    }, life);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(activate);
    };
  }, [life]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  const getIconClass = () => {
    return (
      icon ||
      {
        success: "ri-check-line",
        danger: "ri-close-circle-line",
        info: "ri-information-line",
        warning: "ri-alert-line",
      }[type]
    );
  };

  return (
    <div
      className={`toast ${type} ${position} ${isActive ? "active" : ""} ${
        isClosing ? "closing" : ""
      }`}
    >
      <div className="toast-content">
        <i className={`check ${getIconClass()}`} />
        <div className="message">
          <span className="text text-1">{type.toUpperCase()}</span>
          <span className="text text-2">{message}</span>
        </div>
      </div>
      {closable && <i className="ri-close-line close" onClick={handleClose} />}
      <div className={`progress ${isActive ? "active" : ""}`} />
    </div>
  );
};
