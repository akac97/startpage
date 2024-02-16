var c = document.getElementById("matrixCanvas");
var ctx = c.getContext("2d");

// making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// characters
var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
matrix = matrix.split("");

var font_size = 10;
var columns = c.width/font_size; 

// an array of drops - one per column
var drops = [];
for(var x = 0; x < columns; x++)
    drops[x] = 1; 

function draw()
{
    // Black BG for the canvas
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0"; // green text
    ctx.font = font_size + "px arial";
    // looping over drops
    for(var i = 0; i < drops.length; i++)
    {
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        // x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        
        // sending the drop back to the top randomly after it has crossed the screen
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        
        // incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 33);

function search(event) {
    if (event.key === 'Enter') {
        window.location.href = 'https://search.bus-hit.me/search?q=' + document.getElementById('search-bar').value;
    }
}
