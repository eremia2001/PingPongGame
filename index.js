
// Variable Init
// Canvas and Context init
let c = document.getElementById("myCanvas")
let ctx = c.getContext("2d")

// Event Listneres
window.addEventListener("resize",resizeCanvas);
window.addEventListener("load",loadGame)



// Main Methode
loadGame();



// Functions
function loadGame()
{

    // calculate height and width of canvas ( game board )
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    drawPlayer();
}

// Calculates the size of the gameElements and draws them
function resizeCanvas()
{
    loadGame()
}


function drawPlayer()
{

    ctx.fillStyle = "white"
    
    
    ctx.fillRect(20,((c.height/2)-((0.3*c.height)/2)) ,(0.02*c.width),(0.3*c.height))
}