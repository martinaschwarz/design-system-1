import React, { useState } from "react";

import Modal from "../../atoms/Modal/Modal";

import LoginForm from "../../molecules/LoginForm/LoginForm";
import ResetPasswordForm from "../../molecules/ResetPasswordForm/ResetPasswordForm";

const LoginModal = ({ ref }) => {
  const [view, setView] = useState("login"); // or "reset"

  return (
    <Modal ref={ref}>
      {view === "login" ? (
        <LoginForm onForgot={() => setView("reset")} />
      ) : (
        <ResetPasswordForm onBack={() => setView("login")} />
      )}
    </Modal>
  );
};

export default LoginModal;
