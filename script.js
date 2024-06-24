document.addEventListener("DOMContentLoaded", () => {
    const sounds = {
        kickBass: new Audio ("sounds/kickbass.mp3"),
        snare: new Audio ("sounds/snare.mp3"),
        hiHat: new Audio ("sounds/hihat.mp3"),
        cmajor: new Audio ("sounds/C_guitar.mp3"),
        amajor: new Audio ("sounds/A_guitar.mp3"),
        gmajor: new Audio ("sounds/G_guitar.mp3"),
    
    };

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            const sound = button.getAttribute("data-sound");
            console.log(sound);
            if (sounds[sound]) {
                sounds[sound].currentTime = 0;
                sounds[sound].play();
            };
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
const notes = {
    c4: new Audio ("sounds/c4_piano.mp3"),
    cshp: new Audio ("sounds/c4_sharp.mp3"),
    d4: new Audio ("sounds/d4_piano.mp3"),
    dshp: new Audio ("sounds/d4_sharp.mp3"),
    e4: new Audio ("sounds/e4_piano.mp3"),

};

document.querySelectorAll(".whtKey").forEach(key => {
    key.addEventListener("click", () => {
        const note = key.getAttribute("data-note");
        console.log(note);
        if (notes[note]) {
            notes[note].currentTime = 0;
            notes[note].play();
            };
         }); 
    });

    document.querySelectorAll(".blkKey").forEach(key => {
        key.addEventListener("click", () => {
            event.stopPropagation ();
            const note = key.getAttribute("data-note");
            console.log(note);
            if (notes[note]) {
                notes[note].currentTime = 0;
                notes[note].play();
                };
             }); 
        });
});

// Got the .stopPropagation method in line 47 from chatGPT