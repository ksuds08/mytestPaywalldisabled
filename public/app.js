const stripe = Stripe('your_public_key');
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const subscribeBtn = document.getElementById('subscribe-btn');
const socket = io();

// Function to create chat bubble
function createChatBubble(text, className) {
    const bubble = document.createElement('div');
    bubble.className = className;
    bubble.innerText = text;
    chatWindow.appendChild(bubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendBtn.addEventListener('click', () => {
    const message = userInput.value;
    createChatBubble(`You: ${message}`, 'user-bubble');
    socket.emit('message', message);
    userInput.value = '';
});

socket.on('reply', (response) => {
    createChatBubble(response, 'ai-bubble');
});

// Payment integration
subscribeBtn.addEventListener('click', async () => {
    const { token } = await stripe.createToken();
    const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: 5000, source: token.id })
    });
    const result = await response.json();
    if(result.success) {
        alert('Payment successful! You have access to the chatbot.');
    } else {
        alert('Payment failed: ' + result.error);
    }
});