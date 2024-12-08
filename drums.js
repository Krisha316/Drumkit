
document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
    if(start==true){
        gather(event.key);
    }
});

function sound(key) { 
    switch (key) {
        case "w":
        var sound1 = new Audio("w.mp3");
        sound1.play();
        break; 

        case "a":
        var sound2 = new Audio("a.mp3");
        sound2.play();
        break;

        case "s":
        var sound3 = new Audio('s.mp3');
        sound3.play();
        break;

        case "d":
        var sound4 = new Audio('d.mp3');
        sound4.play();
        break;

        case "j":
        var sound5 = new Audio('j.mp3');
        sound5.play();
        break;

        case "k":
        var sound6 = new Audio('k.mp3');
        sound6.play();
        break;

        case "l":
        var sound7 = new Audio('l.mp3');
        sound7.play();
        break;

        default: console.log(key);
    }
} 

function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("animation");

    setTimeout(function() {
        activeButton.classList.remove("animation");
    }, 100);
}

let audioList = [];
function gather(key){
    audioList.push(key);
    console.log(audioList);
}

function replay(){
    let delay = 0;
    audioList.forEach((key) => {
        setTimeout(() => {
            console.log(key);
            sound(key);
        }, delay);
    delay += 225;
    });
    
}

let savedBeats = []; // Array to store all saved audio lists

function myrecords() {
    if (audioList.length === 0) return; // Don't save empty beats
    
    savedBeats.push([...audioList]);
    
    let beatIndex = savedBeats.length - 1;
    let newButton = document.createElement("button");
    newButton.innerHTML = `Play Beat ${beatIndex + 1}`;
    newButton.className = "beat-button";
    newButton.setAttribute("data-index", beatIndex);
    
    document.querySelector(".recordings").appendChild(newButton);

    audioList = [];

    newButton.addEventListener("click", function () {
        let index = parseInt(this.getAttribute("data-index"));
        replaySavedBeat(savedBeats[index]);
    });
}

function replaySavedBeat(beat) {
    let delay = 0;
    beat.forEach((key) => {
        setTimeout(() => {
            sound(key);
            animation(key);
        }, delay);
        delay += 225;
    });
}

