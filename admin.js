// pages/admin.js
export default function AdminPanel() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Admin Panel</h1>
      <p>👀 Scanned Wallet Logs</p>
      <ul>
        <li>0x1234...abcd — ✅ 2.5 USDT</li>
        <li>0x9999...ffff — ❌ 0.0 found</li>
      </ul>
    </div>
  );
}