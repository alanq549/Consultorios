import { useState } from "react";
import LoginRegisterFlip from "../components/LoginRegisterFlip";
import Login from "./Login";
import Register from "./Register";
import { ErrorBoundary } from "react-error-boundary"; // si usas esta librería

export default function AuthPage() {
  const [flipped, setFlipped] = useState(false);

  return (
    <LoginRegisterFlip
      front={
        <ErrorBoundary fallback={<p>Algo falló en el login 
          <p>Intenta de nuevo más tarde.</p>
        </p>
        }>
          <Login toggleFlip={() => setFlipped(true)} />
        </ErrorBoundary>
      }
      back={
        <ErrorBoundary fallback={<p>Algo falló en el login 
          <p>Intenta de nuevo más tarde.</p>
        </p>
        }>          <Register toggleFlip={() => setFlipped(false)} />
        </ErrorBoundary>
      }
      flipped={flipped}
    />
  );
}
