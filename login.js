import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    // Redirect to Google login simulation
    window.location.href = "/dashboard";
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Logging in...</h1>
    </div>
  );
}