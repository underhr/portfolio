import FilterTab from './FilterTab.jsx'
import Project from './Project.jsx'
import { useState } from 'react';

export default function Projects() {
    const [filter, setFilter] = useState("All");
    return(
        <main className='p-5 sm:p-10 flex flex-col gap-10 flex-1'>
            <h1 className="font-bold text-4xl">Projects</h1>

            <div className='flex justify-evenly lg:justify-center lg:gap-30 font-bold text-sm text-(--text-darker)'>
                <FilterTab filter={'All'} setFilter={setFilter} currentFilter={filter}/>
                <FilterTab filter={'Freelance'} setFilter={setFilter} currentFilter={filter}/>
                <FilterTab filter={'Frontend Mentor'} setFilter={setFilter} currentFilter={filter}/>
                <FilterTab filter={'Personal'} setFilter={setFilter} currentFilter={filter}/>
            </div>

            <div className='flex flex-wrap justify-evenly gap-5 sm:gap-10'>
                <Project 
                    filter={filter}
                    type="Freelance"
                    title="Mcdonald Construction" 
                    description="This was my first freelance project, although it is no longer in use." />

                <Project
                    filter={filter}
                    type="Personal"
                    title="Gulf Coast Escape Room" 
                    description="I build this website to practice making a full page for a real business, where I work." />
                    
                <Project 
                    filter={filter}
                    type="Personal"
                    title="Rock Paper Scissors" 
                    description="This is the first project I created in Javascript without needing to look anything up." />

                <Project 
                    filter={filter}
                    type="Personal"
                    title="Tilt N Shout" 
                    description="I made this to practice JavaScript by recreating a real life game" />

                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Blog Preview Card" 
                    description="Yet another Frontend Mentor project... More detailed description to come!." />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Four Card Feature Section" 
                    description="Yet another Frontend Mentor project... More detailed description to come!." />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Meet Landing Page" 
                    description="Yet another Frontend Mentor project... More detailed description to come!." />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Product Preview Card" 
                    description="Yet another Frontend Mentor project... More detailed description to come!." />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="QR Code" 
                    description="Yet another Frontend Mentor project... More detailed description to come!." />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Recipe Page" 
                    description="Yet another Frontend Mentor project... More detailed description to come!." />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Results Summary Component" 
                    description="Yet another Frontend Mentor project... More detailed description to come!." />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Social Links Profile" 
                    description="Yet another Frontend Mentor project... More detailed description to come!." />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Testimonials Grid Section" 
                    description="Yet another Frontend Mentor project... More detailed description to come!." />
                    
            </div>
        </main>
    );
}