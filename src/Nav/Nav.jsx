import { useState } from "react"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from "./NavItem.jsx";

export default function Nav({ toggleDark, setCurrent}) {
    const [navOpen, setNavOpen] = useState(false); 

    return(
      <nav className="fixed top-0 left-0 flex flex-row justify-between items-start gap-4 
      bg-(--bg-darker) text-(--text-darker) transition-colors duration-300 
      w-full sm:w-auto sm:h-screen sm:flex-col sm:items-center p-5 sm:p-10 z-10">
        <MenuIcon className="cursor-pointer block sm:hidden!" onClick={() => setNavOpen(!navOpen)} fontSize='large'/>

        <ul className={`flex-col gap-1 font-semibold text-lg w-full sm:flex
          ${navOpen ? 'flex' : 'hidden'}`}>
            {/* <NavItem /> */}
            <NavItem name="Home" setCurrent={setCurrent}/>
            <NavItem name="About Me" setCurrent={setCurrent}/>
            <NavItem name="Projects" setCurrent={setCurrent}/>
            <NavItem name="Contact" setCurrent={setCurrent}/>
        </ul>

        <DarkModeIcon className="cursor-pointer" onClick={toggleDark} fontSize='large'/>
      </nav>
    );
}