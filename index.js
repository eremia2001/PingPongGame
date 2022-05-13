"use strict"

const myCanvas = document.getElementById("myCanvas")
const ctx = myCanvas.getContext("2d")
let hi = window.innerHeight
let wi = window.innerWidth

const user ={
    x: 20,
    y : hi,
    hi: 200,
    wi:20,
    score:0
};
const com ={
    x: wi,
    y : hi/2-100,
    hi: 200,
    wi:20,
    score:0
}




console.log(myCanvas.width)



// Fills Field When Loading Page
window.addEventListener("load", function resizeBoard()
{
 myCanvas.width = wi
 myCanvas.height = hi

    ctx.fillRect(0,0,myCanvas.width,myCanvas.height)
    console.log(myCanvas.width,myCanvas.height)
    
ctx.fillStyle = "#FF0000";
ctx.fillRect(user.x,user.y,user.wi,user.hi);
ctx.fillRect(com.x,com.y,com.wi,com.hi);



} );
// Fills Field When Resizing the Page 
window.addEventListener("resize", function resizeBoard()
{
    myCanvas.height = window.innerHeight
    myCanvas.width = window.innerWidth
    ctx.fillRect(0,0,myCanvas.width,myCanvas.height)
    console.log(myCanvas.width,myCanvas.height)
    
} );

