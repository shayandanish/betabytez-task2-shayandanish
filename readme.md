# 🚀 Dynamic Developer Portfolio

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

A fully responsive, dynamic portfolio web application designed to showcase projects, skills, and professional experience. Built as a comprehensive transition from static HTML/CSS to a modern component-driven architecture using React and Vite.

## ✨ Key Features

- **Component-Driven UI:** A meticulously decoupled architecture utilizing functional React components for high reusability and clean code separation.
- **Client-Side Routing:** Seamless, lightning-fast navigation across multiple pages without browser refreshes, powered by `react-router-dom`.
- **Persistent Theme Toggling:** A custom light/dark mode switch that remembers your preference across browser sessions using React Context API and `localStorage`.
- **Live GitHub Statistics:** Dynamically fetches and displays real-time GitHub profile metrics using the public GitHub REST API.
- **Dynamic Content Rendering:** All portfolio data (projects, skills, profile information) is abstracted into a centralized `data.js` file, keeping the UI components strictly focused on presentation.
- **Advanced Project Filtering:** Interactive sorting system allowing users to filter projects by categories (e.g., Web, AI, All).

---

## 🛠️ Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router v6
- **Styling:** Vanilla CSS3 (Custom Properties & Modular styling)
- **Deployment:** Vercel / Netlify ready

---

## 📂 Comprehensive Project Structure

```text
📦 betabytez-task2
 ┣ 📂 public/              # Static assets that bypass Webpack/Vite processing
 ┃ ┣ 📜 favicon.svg        
 ┃ ┗ 📜 icons.svg          
 ┣ 📂 src/
 ┃ ┣ 📂 assets/            # Component-specific media assets (images, icons)
 ┃ ┣ 📂 components/        # Highly reusable, decoupled UI components
 ┃ ┃ ┣ 📜 About.jsx        # GitHub API integration & background
 ┃ ┃ ┣ 📜 Contact.jsx      # Contact form with state management
 ┃ ┃ ┣ 📜 Footer.jsx       
 ┃ ┃ ┣ 📜 Hero.jsx         # Landing section 
 ┃ ┃ ┣ 📜 Navbar.jsx       # Navigation logic and routing links
 ┃ ┃ ┣ 📜 ProjectCard.jsx  # Individual project presentation card
 ┃ ┃ ┣ 📜 Skills.jsx       # Skills visualization
 ┃ ┃ ┗ 📜 ThemeToggle.jsx  # Button component triggering ThemeContext
 ┃ ┣ 📂 context/
 ┃ ┃ ┗ 📜 ThemeContext.jsx # Global State Manager for dark/light mode
 ┃ ┣ 📂 pages/             # Route-level components mapping to specific URLs
 ┃ ┃ ┣ 📜 Home.jsx         # The main landing page aggregating core components
 ┃ ┃ ┣ 📜 ProjectDetail.jsx# Dynamic route component (/projects/:id)
 ┃ ┃ ┗ 📜 ProjectsPage.jsx # Dedicated projects showcase with filtering
 ┃ ┣ 📂 styles/            # Scoped CSS files corresponding to components
 ┃ ┃ ┣ 📜 About.css        
 ┃ ┃ ┣ 📜 Contact.css      
 ┃ ┃ ┣ 📜 Footer.css       
 ┃ ┃ ┣ 📜 Hero.css         
 ┃ ┃ ┣ 📜 Navbar.css       
 ┃ ┃ ┣ 📜 Projects.css     
 ┃ ┃ ┣ 📜 Skills.css       
 ┃ ┃ ┗ 📜 ThemeToggle.css  
 ┃ ┣ 📜 App.jsx            # Core application shell & Route definitions
 ┃ ┣ 📜 data.js            # Single Source of Truth for portfolio content
 ┃ ┣ 📜 index.css          # Global CSS resets and root CSS variables
 ┃ ┗ 📜 main.jsx           # React DOM injection point
 ┣ 📜 eslint.config.js     # Linter configuration
 ┣ 📜 index.html           # Main HTML document template
 ┣ 📜 package.json         # Project metadata and npm dependencies
 ┗ 📜 vite.config.js       # Vite bundler configuration
```

---

## 🚦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shayandanish/betabytez-task2-shayandanish.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd betabytez-task2-shayandanish
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Open [http://localhost:5173/](http://localhost:5173/) to view the application.

---

## 🧠 Architectural Decisions

### State Management (`Context API`)
Instead of prop-drilling the current theme state from `App.jsx` all the way down to individual buttons and cards, this project utilizes the **React Context API** (`ThemeContext.jsx`). 
- It wraps the entire application provider.
- It leverages the `useEffect` hook to synchronize the current theme with the browser's `localStorage`.
- Any deeply nested component can simply call `useTheme()` to apply dark/light styling conditionally.

### Dynamic Routing (`React Router`)
The application transitions from a single-page scrolling layout to a true SPA (Single Page Application).
- **`/`**: Renders the `Home` component containing the Hero, About, Skills, and a subset of Projects.
- **`/projects`**: A dedicated page showcasing the full project portfolio with filtering capabilities.
- **`/projects/:id`**: A parameterized dynamic route. When a user clicks a project card, `useParams` captures the ID, queries the `data.js` file, and dynamically renders the appropriate details and live URL.

### Data Abstraction
To keep the React components pure and strictly focused on rendering the UI, all text, image paths, and skill levels are abstracted into `src/data.js`. Updating the portfolio (adding a new project or skill) requires zero changes to the component structure—only an update to the JSON-like data array.

---

## 👨‍💻 Author
**Shayan Danish**  
Full-Stack Developer | Blockchain Enthusiast
