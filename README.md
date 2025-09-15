# AI Chatbot Application

This is a simple AI chatbot application that integrates Stripe for payment processing. Users must pay to access the chatbot features.

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with your Stripe secret key:
   ```
   STRIPE_SECRET_KEY=your_secret_key
   ```
4. Start the application by running `npm start` or `npm run dev`.
5. Open your browser to `http://localhost:5000`.

## Features
- Chat with an AI.
- Payment through Stripe.

Replace `your_public_key` in `public/app.js` and `your_secret_key` in `.env` with your actual Stripe keys.
