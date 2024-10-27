import React from "react";
import { ToastProvider } from "./ToastProvider";

export const Toast = ({ position = "top-right" }) => (
  <ToastProvider position={position} />
);

export default Toast;
