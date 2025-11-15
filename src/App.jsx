import { useEffect, useState } from "react"
import Nav from './Nav/Nav.jsx'
import Content from './Content.jsx'

export default function App() {
  const [current, setCurrent] = useState("Home");
  const [isDark, setIsDark] = useState(true);
  const [theme, setTheme] = useState("blue");
  const [loaded, setLoaded] = useState(false);

  const toggleDark = () => setIsDark(prev => !prev);

  useEffect(() => {
    const savedCurrent = localStorage.getItem("current");
    const savedIsDark = localStorage.getItem("isDark");
    const savedTheme = localStorage.getItem("theme");

    if (savedCurrent) setCurrent(savedCurrent);
    if (savedIsDark !== null) setIsDark(savedIsDark === "true");
    if (savedTheme) setTheme(savedTheme);

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem('current', current);
  }, [current, loaded]);

  useEffect(() => {
    if (loaded) localStorage.setItem('isDark', isDark);
  }, [isDark, loaded]);

  useEffect(() => {
    if (loaded) localStorage.setItem('theme', theme);
  }, [theme, loaded]);

  return (
    <div data-theme={`${theme}${isDark ? "-dark" : ""}`} className="min-h-screen flex flex-col sm:flex-row bg-(--bg-lighter) text-(--text-lighter) transition-colors duration-300">
      <Nav toggleDark={toggleDark} setCurrent={setCurrent} setTheme={setTheme}/>
      <div className="pt-20 sm:pt-0 sm:pl-[180px] flex items-center justify-center w-full min-h-screen">
        <Content page={current}/>
      </div>
    </div>
  )
}