// ===================================
// CHATBOT INTELLIGENT
// ===================================

class PhoenixChatbot {
  constructor() {
    this.isOpen = false;
    this.hasShownNotification = false;
    this.messages = [];
    this.init();
  }

  init() {
    this.createChatbotHTML();
    this.setupEventListeners();
    this.showWelcomeNotification();
  }

  createChatbotHTML() {
    const chatbotHTML = `
      <!-- Bulle du chatbot -->
      <div class="chatbot-bubble" id="chatbotBubble">
        <svg viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
        </svg>
        <div class="chatbot-notification" id="chatbotNotification" style="display: none;">1</div>
      </div>

      <!-- Fenêtre du chatbot -->
      <div class="chatbot-window" id="chatbotWindow">
        <div class="chatbot-header">
          <h3 data-i18n="chatbot.title">Assistant Phoenix</h3>
          <button class="chatbot-close" id="chatbotClose">
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <div class="chatbot-messages" id="chatbotMessages"></div>

        <div class="chatbot-quick-replies" id="quickReplies"></div>

        <div class="chatbot-input">
          <input type="text" id="chatbotInput" placeholder="Tapez votre message..." data-i18n-placeholder="chatbot.placeholder">
          <button class="chatbot-send" id="chatbotSend">
            <svg viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatbotHTML);
  }

  setupEventListeners() {
    document.getElementById('chatbotBubble').addEventListener('click', () => this.toggleChatbot());
    document.getElementById('chatbotClose').addEventListener('click', () => this.toggleChatbot());
    document.getElementById('chatbotSend').addEventListener('click', () => this.sendMessage());
    document.getElementById('chatbotInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  toggleChatbot() {
    this.isOpen = !this.isOpen;
    const window = document.getElementById('chatbotWindow');
    const notification = document.getElementById('chatbotNotification');

    if (this.isOpen) {
      window.classList.add('open');
      notification.style.display = 'none';

      if (this.messages.length === 0) {
        this.addBotMessage("Bonjour ! 👋 Je suis l'assistant de The Phoenix Agency. Comment puis-je vous aider aujourd'hui ?");
        this.showQuickReplies([
          { text: "📅 Prendre RDV", action: "booking" },
          { text: "💬 Poser une question", action: "question" },
          { text: "🎯 Nos services", action: "services" }
        ]);
      }
    } else {
      window.classList.remove('open');
    }
  }

  showWelcomeNotification() {
    // Attendre 3 secondes puis montrer la notification avec son
    setTimeout(() => {
      if (!this.isOpen && !this.hasShownNotification) {
        this.playNotificationSound();
        document.getElementById('chatbotNotification').style.display = 'flex';
        this.hasShownNotification = true;
      }
    }, 3000);
  }

  playNotificationSound() {
    // Son de notification subtil
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  }

  addBotMessage(text) {
    const messagesDiv = document.getElementById('chatbotMessages');

    // Animation de typing
    this.showTypingIndicator();

    setTimeout(() => {
      this.removeTypingIndicator();

      const messageHTML = `
        <div class="chatbot-message bot">
          <div class="message-avatar">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
          <div class="message-content">${text}</div>
        </div>
      `;

      messagesDiv.insertAdjacentHTML('beforeend', messageHTML);
      this.scrollToBottom();
      this.messages.push({ type: 'bot', text });
    }, 1000);
  }

  addUserMessage(text) {
    const messagesDiv = document.getElementById('chatbotMessages');

    // Create message container
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chatbot-message user';

    // Create content div with user text as textContent (prevents HTML interpretation)
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;

    // Create avatar div with static SVG markup
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    avatarDiv.innerHTML = `
          <svg viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        `;

    // Assemble message
    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(avatarDiv);

    messagesDiv.appendChild(messageDiv);
    this.scrollToBottom();
    this.messages.push({ type: 'user', text });
  }

  showTypingIndicator() {
    const messagesDiv = document.getElementById('chatbotMessages');
    const typingHTML = `
      <div class="chatbot-message bot typing-message">
        <div class="message-avatar">
          <svg viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        </div>
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `;
    messagesDiv.insertAdjacentHTML('beforeend', typingHTML);
    this.scrollToBottom();
  }

  removeTypingIndicator() {
    const typing = document.querySelector('.typing-message');
    if (typing) typing.remove();
  }

  showQuickReplies(replies) {
    const quickRepliesDiv = document.getElementById('quickReplies');
    quickRepliesDiv.innerHTML = '';

    replies.forEach(reply => {
      const btn = document.createElement('button');
      btn.className = 'quick-reply-btn';
      btn.textContent = reply.text;
      btn.onclick = () => this.handleQuickReply(reply.action, reply.text);
      quickRepliesDiv.appendChild(btn);
    });
  }

  handleQuickReply(action, text) {
    this.addUserMessage(text);
    document.getElementById('quickReplies').innerHTML = '';

    switch(action) {
      case 'booking':
        this.addBotMessage("Excellent ! Je vous redirige vers notre système de réservation. 📅");
        setTimeout(() => {
          window.open('https://calendly.com/your-link', '_blank');
        }, 1500);
        break;
            window.open('https://calendly.com/ethanbernier/', '_blank');      case 'question':
        this.addBotMessage("Je suis là pour répondre à vos questions ! Que souhaitez-vous savoir ?");
        this.showQuickReplies([
          { text: "🤖 Services IA", action: "ia" },
          { text: "🔒 Cybersécurité", action: "security" },
          { text: "⚡ Automatisation", action: "automation" }
        ]);
        break;

      case 'services':
        this.addBotMessage("Nous proposons :\n• Intelligence Artificielle\n• Solutions NoCode\n• Automatisation\n• Cybersécurité\n• Business Analyse\n\nQuel service vous intéresse ?");
        break;
    }
  }

  sendMessage() {
    const input = document.getElementById('chatbotInput');
    const text = input.value.trim();

    if (!text) return;

    this.addUserMessage(text);
    input.value = '';

    // Simulation de réponse intelligente
    setTimeout(() => {
      this.addBotMessage("Merci pour votre message ! Un expert vous répondra sous peu. Souhaitez-vous prendre rendez-vous ?");
      this.showQuickReplies([
        { text: "📅 Oui, prendre RDV", action: "booking" },
        { text: "📧 Envoyer un email", action: "email" }
      ]);
    }, 1000);
  }

  scrollToBottom() {
    const messagesDiv = document.getElementById('chatbotMessages');
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}

// Initialiser le chatbot au chargement
document.addEventListener('DOMContentLoaded', () => {
  new PhoenixChatbot();
});
