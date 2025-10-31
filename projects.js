let allBtn = document.getElementById('allBtn');
let freelanceBtn = document.getElementById('freelanceBtn');
let frontendMentorBtn = document.getElementById('frontendMentorBtn');
let personalBtn = document.getElementById('personalBtn');

let freelance = document.getElementsByClassName('freelance');
let frontendMentor = document.getElementsByClassName('frontendMentor');
let personal = document.getElementsByClassName('personal');

const categories = {
    freelance: { btn: freelanceBtn, items: freelance },
    frontendMentor: { btn: frontendMentorBtn, items: frontendMentor },
    personal: { btn: personalBtn, items: personal }
};

function reset() {
    allBtn.style.textDecoration = 'none';
    for (const key in categories) {
        categories[key].btn.style.textDecoration = 'none';
    }

    for (const key in categories) {
        for (const x of categories[key].items) {
            x.classList.add('hidden');
        }
    }
}

function showCategory(name) {
    reset();
    if (name === 'all') {
        allBtn.style.textDecoration = 'underline';
        for (const key in categories) {
            for (const x of categories[key].items) {
                x.classList.remove('hidden');
            }
        }
    } else {
        categories[name].btn.style.textDecoration = 'underline';
        for (const x of categories[name].items) {
            x.classList.remove('hidden');
        }
    }
}
showCategory('all');

allBtn.addEventListener('click', () => { showCategory('all') });
for (const key in categories) {
    categories[key].btn.addEventListener('click', () => { showCategory(key) });
}