# Widget-to-Chat Learning Pathways

A manager-facing analytics dashboard designed to seamlessly bridge the gap between high-level data consumption and deep-dive conversational analysis.

## 🚀 How to Run

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open your browser to `http://localhost:5173/`

## 🧠 UX & Interaction Design Decisions

This project tackles the interaction challenge of connecting isolated data widgets to an AI-assisted chat interface. Here is how we solved the core problems presented in the brief:

### 1. How does the user know which widget is currently active?
- **Active State Highlights:** When clicked, the selected widget elevates with a soft drop shadow, scales up slightly (`scale-[1.02]`), and gains a dark ring border. Unselected widgets fade slightly.
- **Persistent Context Strip:** A pinned header sits at the top of the chat panel labeled "ACTIVE CONTEXT", explicitly displaying the active metric's title, description, and top-level numbers.
- **Collapsible Sidebar Focus:** To maximize focus on the chat, the user can collapse the left widget panel into a slim list. The widgets transform into compact, recognizable navigation pills (Icon + Title) to save screen real estate.

### 2. How does context transfer from the selected widget into the chat?
- **Isolated Threading:** The application state (`chatHistories`) isolates conversations by `widget.id`. Switching between widgets instantly swaps the conversation thread, ensuring the AI and the user are always discussing the correct dataset.
- **Contextual Onboarding:** We introduced a dynamically generated **"Suggested Questions"** component above the chat input. By offering prompts tailored explicitly to the active metric (e.g., "Show me the Sales breakdown" for Knowledge Retention), we instantly onboard the user into the active context.

### 3. How does the AI response render?
A chat interface shouldn't be limited to walls of plain text. We built a dynamic rendering engine that allows the AI to respond with rich UI components based on the data:
- **`stat-callout`**: For quantitative answers, the AI responds with a styled data card showing the trend (e.g., "Up 35% MoM").
- **`insight-card`**: For comparative questions, the AI renders a structured list of bulleted insights.
- **`alert-text`**: For critical metrics (like At-Risk Learners), the AI uses rich text formatting to bold specific departments or names, ensuring high readability for urgent data.

## 🛠 Tech Stack
- React + Vite
- Tailwind CSS v4 (for rapid, responsive styling and pastel token themes)
- Radix UI primitives & Lucide React icons
- Hardcoded mock API data for simulating the LLM responses
