import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  }, []);

  return (
    <div
      id="error-page"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Oula..</h1>
      <p>Désolé, la page que vous essayez d'accéder n'existe pas.</p>
      <p>Redirection dans quelques instants ! 😎🤙</p>
    </div>
  );
}
