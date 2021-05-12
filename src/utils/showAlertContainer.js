import { useState } from "react";

export const showAlertContainer = (callback) => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // fake success process
  const startFakeSuccessProcess = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
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
    startFakeSuccessProcess
  }
}