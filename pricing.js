export default function PricingPage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Pricing Plans</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><strong>Free:</strong> Basic scans</li>
        <li><strong>Pro ($9.99/month):</strong> Deep scans + auto-recovery tools</li>
        <li><strong>Enterprise:</strong> Full concierge support + API access</li>
      </ul>
    </div>
  );
}