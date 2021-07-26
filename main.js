//Const referral
const bcounter = document.querySelector(".BeatCounter")



// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');

// This function is called every 600ms
function update() {

    // Play the 'tick' sound
    tick.play();
   // console.log(play.value)
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600)
    console.log(update)
    console.log(setInterval)
   // while (600) {
        let counter = 0;
        
        const countUp = setInterval(function () {
            if (counter > 4) {
                clearInterval(countUp);
                counter = counter + 1;
            }bcounter.value = 0 + counter;
            bcounter.createElement("Counter" + counter)
            console.log(counter)
            ;

        }, 1000)
    //}
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);

//Setup 'tock' sound
const tock = new Audio("sounds/tock.mp3")

//This function is called every 2400ms
function update2() {
    //Play the "tock" sound
    tock.play()
}

//This function sets up update() to be calle every 2400ms
function setuptockUpdate() {
    setInterval(update2, 2400);
}

//call setuptockupdate() once after 1200ms
setTimeout(setuptockUpdate, 1200)