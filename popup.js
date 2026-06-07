const popup = document.createElement("div");

popup.innerHTML = `
  <div class="popup-overlay">
    <div class="popup-box">
      <button class="close-btn">☾</button>

      <h2>A dreamy ritual is coming</h2>

      <form id="waitlist-form">
        <input 
          type="email" 
          placeholder="Email"
          required
        >
        <button type="submit">
          Join the moonlit waitlist
        </button>
      </form>
    </div>
  </div>
`;

setTimeout(() => {document.body.appendChild(popup);}, 5000);