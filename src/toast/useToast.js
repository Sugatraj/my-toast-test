
import { useState, useCallback } from 'react';

const initialState = {
  type: 'info',
  title: '',
  message: '',
  isVisible: false,
};

export const useToast = () => {
  const [toast, setToast] = useState(initialState);

  const showToast = useCallback(
    (type, title, message) => {
      setToast({ type, title, message, isVisible: true });
    },
    []
  );

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  }, []);

  return {
    toast,
    showToast,
    hideToast,
  };
};
