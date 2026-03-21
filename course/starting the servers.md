# Starting the Fundamentals Environment

Terminal 1: The AI Engine (Ollama Server)

This terminal runs the local AI model that powers the factory's helper. It must be started first.

    Open your first terminal window.
    Run the following command to start the Ollama server.
        Troubleshooting: If the application is already running in the background (llama icon in your menu bar), quit it first.
        To force stop: killall ollama
        To check ports: lsof -i :11434

Bash

    ollama serve

    You will see log messages as the server starts. Leave this terminal running.

This is the foundation. Without it, the Popcorn Factory has no AI assistant.
Terminal 2: The Backend (Python/FastAPI Server)

This terminal runs the Python highlight that handles the factory logic, hints, and communication with the AI.

    Open your second terminal window.
    Navigate to the root directory of your project.

Bash

# Example path - adjust to your actual folder
cd ~/Live-Builds/popcorn-factory

Activate your Python virtual environment.

Bash

source ./.venv/bin/activate

(You should see (venv) appear at the start of your terminal prompt.)
Run the command to start the FastAPI/Uvicorn server. This server runs on port 8000.

Bash

    python -m uvicorn course.backend.app.main:app --reload

    (Note: Ensure your backend folder structure matches course/backend/app/main.py)
    You will see INFO: Uvicorn running on http://127.0.0.1:8000. Leave this terminal running.

This is the application's "brain" and "nervous system."
Terminal 3: The Frontend (Python HTTP Server)

This terminal serves your HTML, CSS, and JavaScript files (the Popcorn Factory Interface) to your browser.

    Open your third terminal window.
    Navigate directly into your frontend directory.

Bash

# Update 'popcorn-factory' to your actual folder name
cd popcorn-factory/frontend

Run the following command to start a simple, dedicated web server for the frontend. This server runs on port 8080.

Bash

    python3 -m http.server 8080

    You will see a message like Serving HTTP on 0.0.0.0 port 8080. Leave this terminal running.

This allows you to see and interact with the Popcorn Factory interface.
Summary: Your Running Environment

Once you have completed these steps, you will have:

    Terminal 1: Running ollama serve (The AI).
    Terminal 2: Running uvicorn on port 8000 (The Python Backend).
    Terminal 3: Running http.server on port 8080 (The Interface).
    Your Web Browser: Open to http://localhost:8080 to start coding!

Optional: Terminal 4 for Sass

If you are actively styling the factory (changing colors or layout), open a fourth terminal:

    Navigate into your frontend directory.
    Run the command:

Bash

sass --watch styles/main.scss:styles/main.css

<!-- This is a step-by-step checklist to launch the complete Kanbanotion application on your local machine. This guide uses a "decoupled" approach, where the Backend and Frontend run as separate servers.

You will need **three separate terminal windows** open to run the full application. A fourth is optional for the Sass compiler.

---

### **Terminal 1: The AI Engine (Ollama Server)**

This terminal runs the local AI model that powers Koby's "brain." It must be started first.

1.  **Open your first terminal window.**
2.  Run the following command to start the Ollama server. If the application is already running in the background (llama icon in your menu bar), quit it first.
    ```
    ollama serve / if still running use 
    ollama stop or 
    killall ollama or 
    to see which server is being used / lsof -i :11434
    now try / 
    then start the server / ollama serve
    ```
3.  You will see log messages as the server starts. **Leave this terminal running.**

*This is the foundation. Without it, the application has no AI.*

---

### **Terminal 2: The Backend (Python/FastAPI Server)**

This terminal runs the Python highlight that handles the chat logic, memory, and communication with the AI.

1.  **Open your second terminal window.**
2.  Navigate to the root directory of your project (e.g., 
    `~/Live-Builds/fundamentals-course/course`).
3.  **Activate your Python virtual environment.**  
    ## if you can't find the correct path use ... find . -name "activate"
    ```
    source ./.venv/bin/activate
    ```
    *(You should see `(venv)` appear at the start of your terminal prompt.)*
4.  Run the command to start the FastAPI/Uvicorn server. This server runs on **port 8000**.
    ``` 
    python -m uvicorn course.backend.app.main:app --reload
    ```
5.  You will see `INFO: Uvicorn running on http://127.0.0.1:8000`. **Leave this terminal running.**

*This is the application's "brain" and "nervous system."*

---

### **Terminal 3: The Frontend (Python HTTP Server )**

This terminal serves your HTML, CSS, and JavaScript files to your browser.

1.  **Open your third terminal window.**
2.  **Navigate directly into your `frontend` directory.** This is the most important part of this step.
    ```
    cd kanbanotion/kanban/frontend
    ```
3.  Run the following command to start a simple, dedicated web server for the frontend. This server runs on **port 8080**.
    ```
    python3 -m http.server 8080
    ```
4.  You will see a message like `Serving HTTP on 0.0.0.0 port 8080 (http://0.0.0.0:8080/ )`. **Leave this terminal running.**

*This is what allows you to see and interact with the user interface.*

---

### **Summary: Your Running Environment**

Once you have completed these steps, you will have:

*   **Terminal 1:** Running `ollama serve` (The AI).
*   **Terminal 2:** Running your Python `uvicorn` server on **port 8000** (The Backend).
*   **Terminal 3:** Running Python's `http.server` on **port 8080** (The Frontend ).
*   **Your Web Browser:** Open to **`http://localhost:8080`** to see and use the application.

### **Optional: Terminal 4 for Sass**

If you are actively editing your styles, you can open a fourth terminal to run the Sass compiler.

1.  Navigate into your `frontend` directory.
2.  Run the command:
    ```bash
    sass --watch styles/main.scss:styles/main.css
    ```

You are now fully operational with a clean, decoupled development environment.
 -->


<!-- kanbanotion Project — Setup + Daily Workflow

One-time setup

Backend (Python)

    Go to the project root:
    cd kanbanotion/kanban 
    Create and activate a virtual environment:
    python -m venv venv
    source venv/bin/activate
    Install backend dependencies:
    pip install -r kanban/requirements.txt

Frontend (Node.js)

    Go to the frontend folder:
    cd /Users/robynmai/Live-Builds/restaurant-project/restaurant/frontend
    Initialize npm and install Sass:
    npm init -y
    npm install sass --save-dev
    Add the build script to your package.json:
    npm pkg set "scripts.build:css"="sass styles/main.scss styles/main.css --watch"

Daily development workflow

You’ll keep three terminals open.

🖥️ Terminal 1 — SCSS Watcher (styles)

    From the frontend folder:
    cd /Users/robynmai/Live-Builds/restaurant-project/restaurant/frontend
    npm run build:css
    Keep this running. You should see: “Sass is watching for changes...”

🧠 Terminal 2 — Backend (AI API)

    From the project root:
    cd /Users/robynmai/Live-Builds/restaurant-project/restaurant
    source venv/bin/activate
    uvicorn backend.main:app --reload 
    Keep this running. Test at: http://localhost:8000/health

🌐 Terminal 3 — Frontend (static site)

    From the frontend folder:
    cd /Users/robynmai/Live-Builds/restaurant-project/restaurant/frontend
    python -m http.server 8080
    Visit: http://localhost:8080

Quick reference
Service	Command	URL	Purpose
SCSS Compiler	npm run build:css	—	Auto-compiles CSS
Backend (FastAPI)	uvicorn backend.main:app --reload	http://localhost:8000	AI API
Health Check	—	http://localhost:8000/health	Backend status
Frontend (static)	python -m http.server 8080	http://localhost:8080	Website

Design and technical requirements

    Page load time: Optimize for speed (minify, compress, lazy-load images)
    Mobile responsiveness: Works across all devices (use media queries)
    Image optimization: Compress without noticeable quality loss
    Headline length: 10 words or fewer
    CTA button size: Large enough for easy tapping on mobile
    Forms: As few fields as possible
    Page length: Depends on offer complexity
    White space: Generous padding around key elements
    Color contrast: High enough for readability
    Font size: Comfortable on all devices

Build phases and to-dos

    Push your highlight to GitHub after each phase.
See below for adding and linking github

✅ Phase 1: Core Website & AI (Done)

    Build all HTML pages with consistent navigation
    Add the custom “Restro” logo to every page
    Style the homepage with a full-screen hero image
    Make the menu, gallery, team, and contact pages look professional
    Connect the AI chat widget to your backend server
    Ensure the AI knows your menu, hours, and reservation process

🚀 Phase 2: Final Polish & Launch Features (Next)

    Make forms functional
        Update main.js to send form data to the backend
        Add a FastAPI endpoint to receive the data
        Configure the server to email you on message/booking
    Refine AI responses
        Improve instructions in restaurant_context.txt (tone, accuracy)
        Test and iterate
    Implement responsive design
        Add media queries in styles/main.scss
        Verify on tablets and phones
    Add analytics
        Create a Google Analytics property
        Add the tracking script to the <head> of every HTML page
    Final deployment & GitHub update
        Final pass on content, links, images, and performance
        Commit and push to GitHub

Notes and tips

    You only need to create the virtual environment and install dependencies once. After that, just run source venv/bin/activate when you start work.
    Stop any running server/watchers with Ctrl + C.
    If port 8080 is taken, try python -m http.server 8081 and visit http://localhost:8081.

    Github 

first we need to go into the right directory 
    
    cd kanbanotion

Initialize a new, clean Git repository right here
    
    git init

Add all your project files
    
    git add .

Make your first clean commit

    git commit -m "Initial commit: Functional Kanban board with persistence"

Rename the branch to 'main'
    
    git branch -M main

Connect to your new GitHub repository (PASTE THE URL YOU COPIED)
    
    git remote add origin https://github.com/YoRobynYo/kanbanotion.git

Push your project to GitHub
    
    git push -u origin main

check in Github https://github.com/YoRobynYo/kanbanotion 
    
    make sure the files have updated 



original js highlight for backup 
// js/chat.js

document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
// js/chat.js

document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
    // ===================================
    // --- THIS IS THE REQUIRED UPDATE ---
    // ===================================
    
    // The new FastAPI backend is running on port 8000 and the route is /api/chat.
    const backendUrl = 'http://127.0.0.1:8000/api/chat';

    // --- CHAT WINDOW TOGGLE LOGIC ---
    chatButton.addEventListener('click', () => {
        chatWindow.classList.toggle('open');
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.remove('open');
    });

    // --- CHAT COMMUNICATION LOGIC ---
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;

        addMessage(userMessage, 'user');
        chatInput.value = '';

        try {
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const data = await response.json();
            addMessage(data.reply, 'bot');
        } catch (error)
        {
            console.error("Error communicating with backend:", error);
            // Updated error message to be more helpful
            addMessage("Sorry, I can't connect to the server. Please ensure the Python backend is running.", 'bot');
        }
    });

    function addMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}); -->