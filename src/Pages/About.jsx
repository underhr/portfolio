export default function About() {
    return(
        <main className='p-5 sm:p-10 flex flex-col gap-5 flex-1 sm:justify-center max-w-2xl'>
            <h1 className="font-bold text-4xl">
                About Me
            </h1>
            <p>
                My name is Haley, and I am a 22 year old front end web developer. I took web development classes from 8th through 10th grade, and enjoyed them very much. My first year was my favorite, being my gateway into coding, learning HTML and CSS. Unfortunately, we did not learn much past that, but instead practiced what we already knew. After not coding for several years, I have recently decided to dedicate myself to re-learning frontend web development. I have since learned Javascript, and started to learn React. Coding has been one of my favorite hobbies, and I hope to make a career out of it!
            </p>
            <img src="./selfie.jpg" alt="Picture of me!" className="rounded-full w-1/2 sm:w-1/3 self-center border-10 border-(--bg-darker)/50 transition-colors duration-300"/>
        </main>
    );
}