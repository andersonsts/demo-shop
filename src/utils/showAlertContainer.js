import { useState } from "react";

export const showAlertContainer = (callback) => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const start = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 3000);
      callback()
    }, 3000);
  }

  return {
    loading, 
    showAlert,
    start
  }
}