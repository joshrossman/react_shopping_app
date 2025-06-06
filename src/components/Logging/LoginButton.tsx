// LoginButton.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import React from 'react'
import './Logging.css'

const LoginButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  if(!isAuthenticated) return (<Button className="log-button" onClick={handleLogin}>Log In</Button>)
  return null;
};

export default LoginButton;