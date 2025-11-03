import { useState } from "react"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import NavItem from "./NavItem.jsx";

export default function Nav({ toggleDark, setCurrent}) {
    const [navOpen, setNavOpen] = useState(false); 

    return(
        <nav className='flex flex-row justify-between items-start bg-(--bg-darker) text-(--text-darker) transition-colors duration-300 absolute top-0 w-dvw p-10 z-1 sm:flex-col sm:items-center sm:h-dvh sm:w-auto sm:left-0'>
        <MenuIcon className="cursor-pointer sm:hidden" onClick={() => setNavOpen(!navOpen)} fontSize='large'/>

        <ul className={`flex-col gap-4 font-semibold text-lg
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