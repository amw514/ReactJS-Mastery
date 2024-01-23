import { useState } from "react";

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  // const toggleAlert = () => {
  //   if (showAlert) {
  //     showAlert(false);
  //     return;
  //   }
  //   setShowAlert(true);
  // };

  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => setShowAlert(!showAlert)}
      >
        Toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Hellow alert</div>;
};

export default ToggleChallenge;
