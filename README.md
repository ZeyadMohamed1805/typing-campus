# Typing Campus

Typing Campus is a high-performance typing test platform built with modern web technologies. It features interactive typing challenges, real-time analytics, leaderboards, and customizable themes.

## 🚀 Technologies Used
- **Vite** – Fast development and optimized builds
- **React** – Component-based UI development
- **TypeScript** – Type-safe JavaScript
- **SCSS Modules** – Scoped styling
- **React Router** – Client-side navigation
- **Prettier** – Code formatting

## 📦 Installation
Clone the repository and install dependencies:

```sh
git clone https://github.com/yourusername/typing-campus.git
cd typing-campus
npm install
```

## 🏃 Running the Project
Start the development server:
```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

## 🚀 Production Build
To create an optimized production build:
```sh
npm run build
```

Serve the build locally to test:
```sh
npm run preview
```

## 🎨 Styling with SCSS Modules
SCSS modules provide scoped styling. Example usage:
```tsx
import styles from './Button.module.scss';

const Button = () => <button className={styles.button}>Click Me</button>;
```

## 🛠 Prettier Setup (Code Formatting)
Prettier is used for consistent formatting. Run manually:
```sh
npm run beautify
```
Enable **Format on Save** in VS Code settings to automate this.

## 🔀 Routing with React Router
Routes are managed using **React Router**. Example:
```tsx
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/test" element={<TypingTest />} />
  </Routes>
);
```

## 📜 License
This project is licensed under the **Apache 2.0 License**.

## 🤝 Contributing
Feel free to submit issues or pull requests to improve the project!

## 📧 Contact
For inquiries, contact **zeyadmohamed.bus.acc@gmail.com**.

