document.addEventListener('DOMContentLoaded', () => {
  const chatbotOpenBtn = document.getElementById('chatbot-open-btn');
  const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
  const chatbotContainer = document.getElementById('chatbot-container');
  const chatbotSendBtn = document.getElementById('chatbot-send-btn');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotMessages = document.getElementById('chatbot-messages');

  chatbotOpenBtn.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex';
    chatbotOpenBtn.style.display = 'none';
  });

  chatbotCloseBtn.addEventListener('click', () => {
    chatbotContainer.style.display = 'none';
    chatbotOpenBtn.style.display = 'block';
  });

  chatbotSendBtn.addEventListener('click', sendMessage);
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const message = chatbotInput.value.trim();
    if (message) {
      appendMessage('user', message);
      chatbotInput.value = '';
      // Here you would typically send the message to a bot backend
      // and receive a response. For this example, we'll just echo.
      setTimeout(() => {
        appendMessage('bot', `You said: "${message}"`);
      }, 500);
    }
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', `${sender}-message`);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
});
