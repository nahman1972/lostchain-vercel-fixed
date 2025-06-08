// pages/scan.js

import { useState } from "react";
import Button from "./Button";

export default function ScanPage() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setBalance(null);
    try {
      const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_ETH_PROVIDER);
      const bal = await provider.getBalance(address);
      setBalance(ethers.utils.formatEther(bal));
    } catch (err) {
      console.error(err);
      setBalance("💥 Invalid address or network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>🔍 Ethereum ETH Balance Scan</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Ethereum address"
          style={{
            padding: "10px",
            width: "80%",
            maxWidth: "300px",
            fontSize: "16px"
          }}
          required
        />
        <br /><br />
        <button type="submit" style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Scan
        </button>
      </form>

      {loading && <p style={{ marginTop: "20px" }}>⏳ Checking balance…</p>}
      {balance !== null && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          {balance.startsWith("💥")
            ? balance
            : `✅ Balance: ${balance} ETH`}
        </p>
      )}
    </div>
  );
}