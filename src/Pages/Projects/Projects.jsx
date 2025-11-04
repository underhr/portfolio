import Project from './Project.jsx'
import { useState } from 'react';

export default function Projects() {
    const [filter, setFilter] = useState();
    return(
        <main className='p-5 sm:p-10 flex flex-col gap-10 flex-1'>
            <h1 className="font-bold text-4xl">Projects</h1>

            <div className='flex justify-between font-bold text-xl text-(--text-darker)'>
                <span className='cursor-pointer' onClick={() => setFilter("All")}>
                    All
                </span>
                <span className='cursor-pointer' onClick={() => setFilter("Freelance")}>
                    Freelance
                </span>
                <span className='cursor-pointer' onClick={() => setFilter("Frontend")}>
                    Frontend Mentor
                </span>
                <span className='cursor-pointer' onClick={() => setFilter("Personal")}>
                    Personal
                </span>
            </div>

            <div className='flex flex-wrap justify-evenly gap-5'>
                <Project
                    type="personal"
                    title="Gulf Coast Escape Room" 
                    description="I build this website to practice making a full page for a real business, where I work." />
                    
                <Project 
                    type="personal"
                    title="Rock Paper Scissors" 
                    description="This is the first project I created in Javascript without needing to look anything up." />
            </div>
        </main>
    );
}