import React, { useRef, useEffect } from "react";
import { ToastContainer } from "./ToastContainer";
import ToastService from "./ToastService";

export const ToastProvider = ({ position = "top-right" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const unsubscribe = ToastService.subscribe((type, message, options) => {
      if (containerRef.current) {
        containerRef.current.addToast(type, message, {
          ...options,
          position: options.position || position, // Use individual or default position
        });
      }
    });
    return () => unsubscribe();
  }, [position]);

  return <ToastContainer ref={containerRef} />;
};
