let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

const boxContainer = document.querySelector('.box-container2');
const quotes = [
    {
        img1: '../icon/checked.png',
        p: 'Old World Coffee Roasters is a modern coffee roastery committed to old-world values and the relentless pursuit of quality in coffee. It sources the finest coffees, meticulously grown to yield intricate and delicious flavor profiles. Its roasting philosophy makes each coffee approachable while paying homage to those who bring exceptional coffee to life. .',
        img2: 'icon/cat.png',
        name: 'Smith'
    },
    {
        img1: '../icon/checked.png',
        p: 'Noble Coffee Roasting, in Ashland, Oregon, is a barista-driven coffee roasting company with a coffeehouse and roasting facility that focuses on coffee education, world-class drinks and pastries, and sustainability. It sources only organic coffees and takes pride in paying well above the fair-trade minimum. Its Ethiopia JemJem recently scored 94 points! .',
        img2: 'icon/man.png',
        name: 'Smash'
    },
    {
        img1: '../icon/checked.png',
        p: 'The first specialty coffee roaster in Reno, Nevada, @hubcoffeeorasters is about coffee, community, and cycling: “Our logo, a bike wheel, sums it up best. The spokes of the wheel are the individuals who contribute to the community, the HUB connects us, and the wheel keeps us progressing both in coffee and as individuals.”',
        img2: 'icon/saint-bernard.png',
        name: 'Kelvin'
    }
];

quotes.forEach(quote => {
    boxContainer.innerHTML += `
        <div class="box2">
            <img src="${quote.img1}" alt="" class="quote">
            <p>${quote.p}</p>
            <img src="${quote.img2}" alt="" class="user">
            <h3>${quote.name}</h3>
        </div>
    `;
});

const quotes2 = [
    'Get Yours now',
    'Tasty Coffee Available',
    'Start your morning',
    'More Active than pervious'
];

let count = 0;
function randomQuote(){
    count = Math.floor(Math.random() * quotes2.length);
    document.getElementById('random-btn').innerHTML = quotes2[count];
}

window.addEventListener('load', () => {
    randomQuote();
});

function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
