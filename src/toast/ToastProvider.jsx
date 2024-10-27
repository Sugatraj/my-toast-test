import React, { useRef, useEffect } from "react";
import { ToastContainer } from "./ToastContainer";
import ToastService from "./ToastService";

export const ToastProvider = ({ children, position = "top-right" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const unsubscribe = ToastService.subscribe((type, message, options) => {
      if (containerRef.current) {
        // Pass position as part of options, allowing individual toasts to override
        containerRef.current.addToast(type, message, { ...options, position });
      }
    });
    return () => unsubscribe();
  }, [position]);

  return (
    <>
      {children}
      <ToastContainer ref={containerRef} position={position} />
    </>
  );
};
