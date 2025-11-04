function FormItem() {
    return(
        <fieldset>
            <label for="name">Name</label>
            <input type="name" name="name" className="border rounded w-full p-2.5 focus:outline-0" />
        </fieldset>
    );
}

export default function Contact() {
    return(
        <main className="p-5 sm:p-10 flex flex-col sm:self-center gap-5 flex-1 max-w-2xl">
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
                    className="bg-(--text-lighter) text-(--bg-lighter) p-4 rounded hover:bg-(--bg-lighter) hover:text-(--text-lighter) cursor-pointer border  transition-colors duration-300"></input>
            </form>
        </main>
    );
}