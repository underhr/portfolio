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
    <div
      data-theme={isDark ? "dark" : "light"}
      className="min-h-screen bg-(--bg-lighter) text-(--text-lighter) transition-colors duration-300 flex items-center justify-center"
    >
      <Nav toggleDark={toggleDark} setCurrent={setCurrent}/>
      <Content page={current}/>
    </div>
  )
}