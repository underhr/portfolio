let i = 0;
let text =
`Loading...
<h1>Haley Underwood</h1>
<h2>About Me:</h2>
<p>My name is Haley, and I am a 21 year old front end web developer. My goal is to do freelance work and learn as much as I can about the craft! I am currently doing a lot of Frontend Mentor projects to familiarize myself with creating pages based on design files. I am also creating my own small projects to learn different aspects of Javascript, and more in depth HTML and CSS concepts. I took web design for 3 years from 8th to 10th grade, but stopped because of the lack of Javascript being taught. Recently, I have decided to do my own learning and get back into one of my favorite hobbies I've ever had.</p>`
var speed = 500;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('codeBlock').innerHTML += text.charAt(i);
        i++; 
        setTimeout(typeWriter, speed);
    }
}

typeWriter();