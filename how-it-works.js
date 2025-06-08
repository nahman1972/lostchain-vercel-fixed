export default function HowItWorksPage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>How It Works</h1>
      <ol style={{ textAlign: "left", maxWidth: "600px", margin: "auto" }}>
        <li>Enter your wallet address.</li>
        <li>We scan for assets sent to the wrong blockchain.</li>
        <li>We show you potential recoverable tokens.</li>
        <li>Use our guided tools or support to recover your assets.</li>
      </ol>
    </div>
  );
}