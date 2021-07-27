//Const referral




// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
//Setup 'tock' sound
const tock = new Audio("sounds/tock.mp3")


//Metronome event listner



let counter = 0;




// This function is called every 600ms
function update() {
    const metroSound = document.querySelectorAll("input[type=checkbox]")

    for (let i = 0; i < metroSound.length; i++) {
        const metroChk = metroSound[i];
        if (metroChk.checked) {


            console.log(metroChk)



            counter = counter + 1;
            // Play the 'tick' sound
            tick.play();

            //Play the "tock" sound
            if (counter % 4) {
                tock.play()

                console.log(counter)

                const metroncount = document.querySelector(".BeatCounter");
                metroncount.innerText = counter;
            }
        }
    }
}
// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600)
    console.log(update)
    console.log(setInterval)
    // while (600) {
    let counter = 0;

    //const countUp = setInterval(function () {
    //if (counter > 4) {
    // clearInterval(countUp);
    // counter = counter + 1;
    //} bcounter.value = 0 + counter;
    // bcounter.createElement("Counter" + counter)
    // console.log(counter)


    //}, 1000)
    //}
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);



//This function is called every 2400ms
////function update2() {



//This function sets up update() to be calle every 2400ms
//function setuptockUpdate() {
  //  setInterval(update2, 2400);
//}

//call setuptockupdate() once after 1200ms
//setTimeout(setuptockUpdate, 1200)
