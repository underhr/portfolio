import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'

export default function Content({ page }) {
    switch (page) {
        case 'Home':
            return <Home />;
        case 'About Me':
            return <About />;
        case 'Projects':
            return <Projects />;
        case 'Contact':
            return <Contact />;
    }
}