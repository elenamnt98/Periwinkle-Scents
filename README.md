# Periwinkle Scents Landing Page

A dreamy landing page built for **Periwinkle Scents**, featuring a custom waitlist popup connected to the MailerLite API through Netlify Functions.

## ✨ Features

- Responsive landing page
- Custom waitlist popup
- Email validation
- Secure backend using Netlify Functions
- MailerLite API integration
- Automatic subscriber assignment to a waitlist group
- Welcome email automation
- Mobile-friendly design

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla)
- Netlify Functions
- MailerLite API

## 🚀 Live Demo

https://yourwebsite.com

## 📸 Preview

<img width="1170" height="2532" alt="vq1MJD-0" src="https://github.com/user-attachments/assets/68241c93-70dd-4273-8f77-b69b247af896" />
<img width="1170" height="2532" alt="4MA68us_" src="https://github.com/user-attachments/assets/c28d8dcf-b3ed-496f-8ef7-fc6463b162e5" />



## ⚙️ How it works

1. Visitor enters their email.
2. The frontend sends a POST request to a Netlify Function.
3. The function securely communicates with the MailerLite API.
4. The subscriber is added to the "waitlist" group.
5. MailerLite automation sends a welcome email.

## 📂 Project Structure

```
/
│
├── index.html
├── gradient.html
├── css/
├── js/
│   └── popup.js
│
├── netlify/
│   └── functions/
│       └── waitlist.js
│
└── assets/
```

## 🔒 Environment Variables

Create a `.env` or Netlify Environment Variable:

```
MAILERLITE_API_KEY=your_api_key
```

## 📌 Future Improvements

- Countdown timer
- Product gallery
- Shopify integration
- Analytics dashboard
- A/B testing


## 💡 What I Learned

During this project I learned how to:

- Build serverless backend functions
- Handle HTTP requests and JSON data
- Secure API keys using environment variables
- Integrate a third-party REST API
- Deploy full-stack applications with Netlify

## 👩‍💻 Author

Made with ☕ and lavender by Elena Mundo.
