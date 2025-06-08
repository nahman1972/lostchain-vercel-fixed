// pages/scan.js

import { useState } from "react";

export default function ScanPage() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    setTimeout(() => {
      setLoading(false);
      setResult("✅ Tokens recovered: 3.00 USDT");
    }, 2000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>🔍 Wallet Recovery Scan</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter wallet address"
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "300px",
            fontSize: "16px"
          }}
          required
        />
        <br /><br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "6px"
          }}
        >
          Scan
        </button>
      </form>

      {loading && <p style={{ marginTop: "20px" }}>⏳ Checking wallet…</p>}
      {result && <p style={{ marginTop: "20px", fontWeight: "bold" }}>{result}</p>}
    </div>
  );
}