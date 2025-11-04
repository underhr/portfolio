import { useState } from "react"
import Nav from './Nav/Nav.jsx'
import Content from './Content.jsx'

export default function App() {
  const [current, setCurrent] = useState("Home");
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(prev => !prev);
  };
  return (
    <div data-theme={isDark ? "dark" : "light"} className="min-h-screen flex flex-col sm:flex-row bg-(--bg-lighter) text-(--text-lighter) transition-colors duration-300">
      <Nav toggleDark={toggleDark} setCurrent={setCurrent}/>
      <Content page={current}/>
    </div>
  )
}