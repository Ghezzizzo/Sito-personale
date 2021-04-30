const col1 = document.querySelector('.col-1');
const col2 = document.querySelector('.col-2');
const col3 = document.querySelector('.col-3');
const col4 = document.querySelector('.col-4');

const btn = document.querySelector('button');

let interval
let time = 0;

let colours = ['red','#00de51','blue','yellow'];

btn.addEventListener('click',startTimer);

function startTimer() {
    if (btn.textContent === 'Start') {
        interval = setInterval(timer, 1000);
        btn.textContent = 'Stop';
    } else {
        clearInterval(interval)
        btn.textContent = 'Start';
        col1.style.backgroundColor = '';
        col2.style.backgroundColor = '';
        col3.style.backgroundColor = '';
        col4.style.backgroundColor = '';
        time = 0
        document.getElementById('time').innerHTML = 0;
    }

}

function getRandomInt (min,max) {
    mini = Math.ceil(min);
    maxi = Math.floor(max);
    return Math.floor(Math.random()*(maxi-mini)) + mini;
}

function timer () {
        
    if (time > 1) {
        time--;
    } else {
        time = 5;
        document.getElementById('time').innerHTML = time;
        col1.style.backgroundColor = colours[getRandomInt (0,4)];
        col2.style.backgroundColor = colours[getRandomInt (0,4)];
        col3.style.backgroundColor = colours[getRandomInt (0,4)];
        col4.style.backgroundColor = colours[getRandomInt (0,4)];  
    }
    document.getElementById('time').innerHTML = time;
        
}

