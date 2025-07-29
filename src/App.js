import React, { useRef, useEffect } from "react";

import Theme from "./Theme.js";

import LoginModal from "./components/organisms/LoginModal/LoginModal";

function App() {
  const loginRef = useRef();

  /**
   * Modal launched on mount for demo purposes only
   */
  useEffect(() => {
    loginRef.current.showModal();
  }, []);

  return (
    <Theme>
      <LoginModal ref={loginRef} />
    </Theme>
  );
}

export default App;
