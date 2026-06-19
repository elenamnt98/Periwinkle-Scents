const popup = document.createElement("div");

popup.innerHTML = `
  <div class="popup-overlay">
    <div class="popup-box">
      <button class="close-btn">☾</button>

      <h2>A dreamy ritual is coming</h2>

      <form id="waitlist-form" method="POST"/>
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

setTimeout(() => {document.body.appendChild(popup);}, 3000);

popup.querySelector(".close-btn").addEventListener("click", () => {
  popup.remove();
});

popup.querySelector("#waitlist-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.querySelector("input[type='email']").value;
   try {
      const response = await fetch("/.netlify/functions/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        window.location.href = "/gradient.html";
      }

    } catch (error) {
      console.error(error);
    }
});

