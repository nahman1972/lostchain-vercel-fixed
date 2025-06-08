// pages/contact.js
export default function ContactPage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Contact Us</h1>
      <form style={{ marginTop: "20px" }}>
        <input type="text" placeholder="Name" style={{ padding: "10px", marginBottom: "10px" }} /><br />
        <input type="email" placeholder="Email" style={{ padding: "10px", marginBottom: "10px" }} /><br />
        <textarea placeholder="Message" rows={4} style={{ padding: "10px", width: "80%" }}></textarea><br />
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>Send</button>
      </form>
    </div>
  );
}