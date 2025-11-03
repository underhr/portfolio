

export default function Home({ page }) {
    switch (page) {
        case 'Home':
            return(
                <main className='text-center p-4'>
                    <h1 className='font-bold text-5xl sm:text-7xl'>
                        Hello, World!
                    </h1>
                    <h2 className='text-xl sm:text-3xl'>
                        My name is Haley Underwood
                    </h2>
                </main>
            );
        case 'About Me':
            return(
                <main className='p-4 flex flex-col gap-4'>
                    <h1 className="font-bold text-4xl">
                        About Me
                    </h1>
                    <p className="max-w-2xl">
                        My name is Haley, and I am a 22 year old front end web developer. I took web development classes from 8th through 10th grade, and enjoyed them very much. My first year was my favorite, being my gateway into coding, and learning HTML and CSS. Unfortunately, we did not learn much past that, but instead practiced what we already knew. After not coding for several years, I have recently decided to dedicate myself to re-learning frontend web development. I have since learned Javascript, and started to learn React. Coding has been one of my favorite hobbies, and I hope to make a career out of it!
                    </p>
                </main>
            );
        case 'Projects':
            return(
                <main className='p-4'>
                    Projects
                </main>
            );
        case 'Contact':
            return(
                <main className="p-4 flex flex-col gap-4">
                    <h1 className="font-bold text-4xl">Contact me</h1>
                    <form action="https://formsubmit.co/haleyroseu@gmail.com" method="POST"
                        className="flex flex-col gap-3">
                        <fieldset>
                            <label for="name">Name</label>
                            <input type="name" name="name" className="border rounded w-full p-2.5 focus:outline-0" />
                        </fieldset>

                        <fieldset>
                            <label for="email">Email</label>
                            <input type="email" name="email" className="border rounded w-full p-2.5 focus:outline-0" />
                        </fieldset>
            
                        <fieldset>
                            <label for="number">Phone Number</label>
                            <input type="tel" name="number" className="border rounded w-full p-2.5 focus:outline-0" />
                        </fieldset>
                        
                        <fieldset>
                            <label for="message">Leave a Message</label>
                            <textarea name="message" className="border rounded w-full p-2.5 focus:outline-0"></textarea>
                        </fieldset>

                        <input type="submit" name="submit" id="submit"
                            className="bg-(--text-lighter) text-(--bg-lighter) p-4 rounded hover:bg-(--bg-lighter) hover:text-(--text-lighter) cursor-pointer border"></input>
                    </form>
                </main>
            );
    }
}