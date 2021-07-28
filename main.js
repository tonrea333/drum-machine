// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
//Setup 'tock' sound
const tock = new Audio("sounds/tock.mp3")
//Setup "kick-drum" sound
const kickDrum = new Audio("sounds/kick-drum.mp3");
//Setup "snare-drum" sound
const snareDrum = new Audio("sounds/snare-drum.mp3");
//Setup "hi-hat" sound
const hiDrum = new Audio("sounds/hi-hat.mp3");

//Metronome event listner
let counter = 0;

// This function is called every 600ms
function update() {
    const metroSound = document.querySelectorAll('input[name="beat"]:checked');
    const kickSound = document.querySelectorAll('input[name="aaaa"]:checked');
    const snareSound = document.querySelectorAll('input[name="cccc"]:checked');
    const hiSound = document.querySelectorAll('input[name="dddd"]:checked');
    for (let i = 0; i < metroSound.length; i++) {
        const metroChk = metroSound[i];
        if (metroChk.checked) {
            console.log(metroChk)
            counter = counter + 1;
            // Play the 'tock' sound
            tock.play();
            //Play the "tick" sound
            if (counter % 4) {
                tock.pause()
                tick.play()

                console.log(metroSound[i], "test")
                console.log(counter)
                //Beat counter
                const metroncount = document.querySelector(".BeatCounter");
                metroncount.innerText = counter;
            }
        }
    }
    //loop for kick sound
    for (let i = 0; i < kickSound.length; i++) {
        const kickChk = kickSound[i];
        if (kickChk.checked) {
            kickDrum.play();
        }
    }
    //loop for snare sound
    for (let i = 0; i < snareSound.length; i++) {
        const snareChk = snareSound[i];
        if (snareChk.checked) {
            snareDrum.play();
        }
    }
    //Loop for hi sound
    for (let i = 0; i < hiSound.length; i++) {
        const hiChk = hiSound[i];
        if (hiChk.checked) {
            hiDrum.play();
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
}
// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);



