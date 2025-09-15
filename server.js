const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();

const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle payment
app.post('/api/payment', async (req, res) => {
    const { amount, source } = req.body;
    try {
        const payment = await stripe.charges.create({
            amount,
            currency: 'usd',
            source,
            description: 'AI Chatbot Access'
        });
        res.json({ success: true, payment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Socket.io connection
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (msg) => {
        socket.emit('reply', `AI: You said '${msg}'`);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Serve web files
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});