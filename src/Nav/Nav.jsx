import { useState } from "react"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PaletteIcon from '@mui/icons-material/Palette';
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from "./NavItem.jsx";
import ColorPalette from "./ColorPalette.jsx";

export default function Nav({ toggleDark, setCurrent, setTheme }) {
  const [navOpen, setNavOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  return(
    <nav className="fixed top-0 left-0 flex flex-row justify-between items-start gap-4 
    bg-(--bg-darker) text-(--text-darker) transition-colors duration-300 
    w-full sm:w-auto sm:h-screen sm:flex-col sm:items-center p-5 sm:p-10 z-10">
    
      <MenuIcon className="cursor-pointer block sm:hidden!" onClick={() => setNavOpen(!navOpen)} fontSize='large'/>

      <ul className={`flex-col gap-1 font-semibold text-lg w-full sm:flex
        ${navOpen ? 'flex' : 'hidden'}`}>
          <NavItem name="Home" setCurrent={setCurrent}/>
          <NavItem name="About Me" setCurrent={setCurrent}/>
          <NavItem name="Projects" setCurrent={setCurrent}/>
          <NavItem name="Contact" setCurrent={setCurrent}/>
      </ul>

      <div className="flex sm:flex-col gap-5 items-center relative">
        <ColorPalette paletteOpen={paletteOpen} setTheme={setTheme} />
        <PaletteIcon className="cursor-pointer" onClick={() => setPaletteOpen(!paletteOpen)} fontSize='large' />

        <DarkModeIcon className="cursor-pointer" onClick={toggleDark} fontSize='large' />
      </div>

    </nav>
  );
}