// main.js
const c = document.getElementById("matrixCanvas");
const ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%".split("");
const font_size = 10;
const columns = c.width/font_size; 
const drops = Array(columns).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0F0";
    ctx.font = `${font_size}px arial`;

    for(let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        
        if(drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        
        drops[i]++;
    }
}

setInterval(draw, 33);

document.getElementById("search-bar").addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        const query = event.target.value;
        window.location.href = `https://google.com/search?q=${query}`;
    }
});

function updateTimeCalendar() {
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const date = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
    document.getElementById('time-calendar').innerHTML = `Time: ${time}<br>Date: ${date}`;

    setTimeout(updateTimeCalendar, 1000);
}

updateTimeCalendar();
