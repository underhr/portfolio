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
      <div className="pt-20 sm:pt-0 sm:pl-[180px] flex items-center justify-center w-full min-h-screen">
        <Content page={current}/>
      </div>
    </div>
  )
}