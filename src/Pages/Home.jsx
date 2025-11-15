
function Logo({ src, alt }) {
    return(
        <div className="flex flex-col items-center gap-2 sm:gap-4">
            <img src={`./languages/${src}.svg`} alt={`${alt} Logo`} className="h-18 sm:h-20"/>
            <p className="text-xl sm:text-2xl text-(--text-darker) transition-colors duration-300">{alt}</p>
        </div>
    );
}

export default function Home() {

    return(
        <main className="flex flex-col gap-8 px-8">
            <header className="self-center lg:self-start">
                <h1 className='font-bold text-5xl sm:text-6xl lg:text-8xl'>
                    Hello, World!
                </h1>
                <h2 className='text-xl sm:text-2xl lg:text-4xl'>
                    My name is Haley Underwood
                </h2>
            </header>

            <hr className='p-1 sm:p-2 lg:p-3 bg-(--bg-darker)transition-colors duration-300 border-0' />

            <h2 className="text-2xl sm:text-3xl lg:text-4xl text(--text-darker) w-fit self-center font-semibold">
                My Skills
            </h2>
            <div className="flex flex-wrap justify-evenly gap-4 sm:gap-8">
                <Logo src="html-5" alt="HTML" />
                <Logo src="css-3" alt="CSS" />
                <Logo src="javascript" alt="JavaScript" />
                <Logo src="sass" alt="SASS" />
                <Logo src="tailwind" alt="Tailwind" />
                <Logo src="react" alt="React" />
            </div>
        </main>
    );
}