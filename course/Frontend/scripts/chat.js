// chat.js - Enhanced with draggable, resizable chat window + CODE FORMATTING
document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const chatHeader = document.querySelector('.chat-header');
    const chatClose = document.getElementById('chatClose');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const resetChatBtn = document.getElementById('reset-chat-btn');
    
    const backendUrl = 'http://127.0.0.1:8000/api/chat';
    const resetUrl = 'http://127.0.0.1:8000/api/chat/reset';

    // --- MARKDOWN & CODE FORMATTING FUNCTIONS ---
    function formatMessage(text) {
        // Store code blocks temporarily to protect them
        const codeBlocks = [];
        const inlineCode = [];
        
        // Extract and store code blocks FIRST
        text = text.replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, lang, code) => {
            const placeholder = `__CODEBLOCK_${codeBlocks.length}__`;
            const language = lang || 'plaintext';
            codeBlocks.push(`<pre><code class="language-${language}">${code.trim()}</code></pre>`);
            return placeholder;
        });
        
        // Extract and store inline code
        text = text.replace(/`([^`]+)`/g, (match, code) => {
            const placeholder = `__INLINECODE_${inlineCode.length}__`;
            inlineCode.push(`<code class="inline-code">${escapeHtml(code)}</code>`);
            return placeholder;
        });
        
        // NOW escape HTML in the remaining text
        text = escapeHtml(text);
        
        // Format bold and italic
        text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
        
        // Convert newlines to <br>
        text = text.replace(/\n/g, '<br>');
        
        // Restore code blocks
        codeBlocks.forEach((block, i) => {
            text = text.replace(`__CODEBLOCK_${i}__`, block);
        });
        
        // Restore inline code
        inlineCode.forEach((code, i) => {
            text = text.replace(`__INLINECODE_${i}__`, code);
        });
        
        return text;
    }
    
    function escapeHtml(str) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return str.replace(/[&<>"']/g, m => map[m]);
    }

    // --- DARK MODE TOGGLE ---
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
        darkModeBtn.textContent = isDarkMode ? '☀️' : '🌙';
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', toggleDarkMode);
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeBtn.textContent = '☀️';
        }
    }

    // --- CHAT WINDOW TOGGLE ---
    chatButton.addEventListener('click', () => {
        chatWindow.classList.add('active');
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    // --- DRAGGABLE CHAT WINDOW ---
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;

    chatHeader.style.cursor = 'move';
    chatHeader.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        if (e.target.closest('.chat-close')) return;
        isDragging = true;
        initialX = e.clientX - chatWindow.offsetLeft;
        initialY = e.clientY - chatWindow.offsetTop;
        chatHeader.style.cursor = 'grabbing';
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        const maxX = window.innerWidth - chatWindow.offsetWidth;
        const maxY = window.innerHeight - chatWindow.offsetHeight;

        currentX = Math.max(0, Math.min(currentX, maxX));
        currentY = Math.max(0, Math.min(currentY, maxY));

        chatWindow.style.left = currentX + 'px';
        chatWindow.style.top = currentY + 'px';
        chatWindow.style.right = 'auto';
        chatWindow.style.bottom = 'auto';
    }

    function dragEnd() {
        isDragging = false;
        chatHeader.style.cursor = 'move';
    }

    // --- RESIZABLE CHAT WINDOW ---
    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'resize-handle';
    resizeHandle.innerHTML = '⋰';
    chatWindow.appendChild(resizeHandle);

    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener('mousedown', resizeStart);
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', resizeEnd);

    function resizeStart(e) {
        isResizing = true;
        startWidth = chatWindow.offsetWidth;
        startHeight = chatWindow.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
        e.preventDefault();
    }

    function resize(e) {
        if (!isResizing) return;
        const width = startWidth + (e.clientX - startX);
        const height = startHeight + (e.clientY - startY);

        if (width >= 350 && width <= 1200) {
            chatWindow.style.width = width + 'px';
        }
        if (height >= 400 && height <= 1200) {
            chatWindow.style.height = height + 'px';
        }
    }

    function resizeEnd() {
        isResizing = false;
    }

    // --- RESET CHAT ---
    resetChatBtn.addEventListener('click', async () => {
        if (confirm("Are you sure you want to reset the chat?")) {
            await resetChat();
        }
    });

    async function resetChat() {
        try {
            const response = await fetch(resetUrl, { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });
            
            if (!response.ok) throw new Error('Reset failed');
            
            chatMessages.innerHTML = '';
            addMessage("Chat reset successfully. How can I assist you today?", 'ai');
            chatInput.value = '';
            console.log('✅ Chat reset successful');
        } catch (error) {
            console.error('❌ Error resetting chat:', error);
            addMessage("Failed to reset chat. Please try again.", 'ai');
        }
    }

    // --- CHAT COMMUNICATION ---
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        addMessage(userMessage, 'user');
        chatInput.value = '';

        try {
            console.log('📤 Sending message:', userMessage);
            
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('📥 Received response:', data);
            
            addMessage(data.reply, 'ai');
        } catch (error) {
            console.error("❌ Error communicating with backend:", error);
            addMessage("Sorry, I can't connect to the server. Please check your backend is running.", 'ai');
        }
    });

    // --- ADD MESSAGE TO CHAT (UPDATED WITH GRADIENT TEXT) ---
function addMessage(text, sender) {
    const messageContainer = document.createElement('div');
    // This adds 'message' and either 'user' or 'ai' as classes
    messageContainer.classList.add('message', sender); 

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';

    if (sender === 'ai') {
        // AI messages are processed to handle code blocks, etc.
        bubble.innerHTML = formatMessage(text);
    } else {
        // USER messages get the special gradient text treatment.
        // --- THIS IS THE MODIFIED PART ---
        const textElement = document.createElement('p'); // 1. Create a <p> tag
        textElement.className = 'gradient-text';         // 2. Give it our special class
        textElement.textContent = text;                  // 3. Put the text inside it
        bubble.appendChild(textElement);                 // 4. Put the <p> inside the bubble
    }

    messageContainer.appendChild(bubble);
    chatMessages.appendChild(messageContainer);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    console.log(`✅ Message added (${sender}):`, text.substring(0, 50) + '...');
}

    // --- MOBILE DETECTION ---
    function isMobile() {
        return window.innerWidth <= 768;
    }

    if (isMobile()) {
        chatWindow.classList.add('mobile-fullscreen');
    }

    window.addEventListener('resize', () => {
        if (isMobile()) {
            chatWindow.classList.add('mobile-fullscreen');
        } else {
            chatWindow.classList.remove('mobile-fullscreen');
        }
    });

    // Initialize
    addMessage("Hey!", 'ai');
    console.log('✅ Enhanced chat system with code formatting initialized');
});
