// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');

// This function is called every 600ms
function update() {

    // Play the 'tick' sound
    tick.play();

}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600)
    //setTimeout(450);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

//Setup 'tock' sound
const tock = new Audio("sounds/tock.mp3")

//This function is called every 2400ms
function update2(){
    //Play the "tock" sound
   tock.play()
}

//This function sets up update() to be calle every 2400ms
function setuptockUpdate() {
    setInterval(update2, 2400);
}

//call setuptockupdate() once after 1200ms
setTimeout(setuptockUpdate, 1200)