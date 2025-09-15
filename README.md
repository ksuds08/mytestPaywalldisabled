# AI Chatbot Application

This is an enhanced AI chatbot application that integrates Stripe for payment processing and includes industry-standard chat conventions with streaming responses.

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
- Chat with an AI using streaming responses.
- Payment through Stripe.

Replace `your_public_key` in `public/app.js` and `your_secret_key` in `.env` with your actual Stripe keys.
