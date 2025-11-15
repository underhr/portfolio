import FilterTab from './FilterTab.jsx'
import Project from './Project.jsx'
import { useState } from 'react';

export default function Projects() {
    const [filter, setFilter] = useState("All");
    return(
        <main className='p-5 sm:p-10 flex flex-col gap-10 flex-1'>
            <h1 className="font-bold text-4xl">Projects</h1>

            <div className='flex justify-evenly lg:justify-center lg:gap-30 font-bold text-sm text-(--text-darker) transition-colors duration-300'>
                <FilterTab filter={'All'} setFilter={setFilter} currentFilter={filter}/>
                <FilterTab filter={'Freelance'} setFilter={setFilter} currentFilter={filter}/>
                <FilterTab filter={'Frontend Mentor'} setFilter={setFilter} currentFilter={filter}/>
                <FilterTab filter={'Personal'} setFilter={setFilter} currentFilter={filter}/>
            </div>

            <div className='flex flex-wrap justify-evenly gap-4 sm:gap-10'>
                <Project 
                    filter={filter}
                    type="Personal"
                    title="Portfolio" 
                    description="You've been here the whole time! This page was created with React, Vite, and Tailwind." />

                <Project
                    filter={filter}
                    type="Personal"
                    title="Gulf Coast Escape Room" 
                    description="I build this website to practice making a full page for a real business, where I work." />

                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Frontend Quiz App" 
                    description="This is probably the most complicated project I have created so far, and was a lot of fun to make! I created it using vanilla JS." />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="FAQ Accordion" 
                    description="This project was to practice best accessibility practices in an FAQ accordion." />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Meet Landing Page" 
                    description="Yet another Frontend Mentor project... More detailed description to come!" />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Tip Calculator App" 
                    description="Yet another Frontend Mentor project... More detailed description to come!" />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Password Generator App" 
                    description="Yet another Frontend Mentor project... More detailed description to come!" />
                    
                <Project 
                    filter={filter}
                    type="Frontend Mentor"
                    title="Results Summary Component" 
                    description="Yet another Frontend Mentor project... More detailed description to come!" />

                <Project 
                    filter={filter}
                    type="Freelance"
                    title="Mcdonald Construction" 
                    description="This was my first freelance project, although it is no longer in use." />
            </div>
        </main>
    );
}