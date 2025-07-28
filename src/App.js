import React, { useRef, useEffect } from "react";

import LoginModal from "./components/organisms/LoginModal/LoginModal";

function App() {
  const loginRef = useRef();

  /**
   * Modal launched on mount for demo purposes only
   */
  useEffect(() => {
    loginRef.current.showModal();
  }, []);

  return <LoginModal ref={loginRef} />;
}

export default App;
