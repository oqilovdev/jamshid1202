let arr =[]
console.log(arr)

document.addEventListener("keyup" ,(e)=>{
    if (e.key==="q") {
        document.body.style.background = "blue";
        audio = new Audio("./audio/do.mp3");
        audio.play();
        document.querySelector(".do").style.background = "grey";
        document.querySelector(".re").style.background = "white";
        document.querySelector(".mi").style.background = "white";
        arr.push('q')
    }
    if (e.key==="w") {
        document.body.style.background = "red"
        audio = new Audio("./audio/re.mp3")
        audio.play()
        document.querySelector(".re").style.background = "grey"
        document.querySelector(".do").style.background = "white"
        document.querySelector(".mi").style.background = "white"

    }
    if (e.key==="e") {
        document.body.style.background = "green"
        audio = new Audio("./audio/mi.mp3")
        audio.play()
        document.querySelector(".mi").style.background = "grey"
        document.querySelector(".re").style.background = "white"
        document.querySelector(".do").style.background = "white"
    }
    if (e.key==="r") {
        document.body.style.background = "yellow"
        // document.querySelector("mi").style.background = "black"
        audio = new Audio("./audio/fa.mp3")
        audio.play()
    }
    if (e.key==="t") {
        document.body.style.background = "wheat"
        // document.querySelector("mi").style.background = "black"
        audio = new Audio("./audio/sol.mp3")
        audio.play()
    }
    if (e.key==="y") {
        document.body.style.background = "fuchsia"
        // documenat.querySelector("mi").style.background = "black"
        audio = new Audio("./audio/lja.mp3")
        audio.play()
    }
    if (e.key==="u") {
        document.body.style.background = "orange"
        // document.querySelector("mi").style.background = "black"
        audio = new Audio("./audio/si.mp3")
        audio.play()
    }

    if (e.key==="i") {
        document.body.style.background = "orange"
        // document.querySelector("mi").style.background = "black"
        audio = new Audio("./audio/camera-flash-204151.mp3")
        audio.play()
    }
    if (e.key==="o") {
        document.body.style.background = "orange"
        // document.querySelector("mi").style.background = "black"
        audio = new Audio("./audio/cardinal-37075.mp3")
        audio.play()
    }
    if (e.key==="p") {
        document.body.style.background = "orange"
        // document.querySelector("mi").style.background = "black"
        audio = new Audio("./audio/cute-level-up-3-189853.mp3")
        audio.play()
    }
    if (e.key==="[") {
        document.body.style.background = "orange"
        // document.querySelector("mi").style.background = "black"
        audio = new Audio("./audio/happy-pop-2-185287.mp3")
        audio.play()
    }
    if (e.key==="]") {
        document.body.style.background = "orange"
        // document.querySelector("mi").style.background = "black"
        audio = new Audio("./audio/movement-swipe-whoosh-3-186577.mp3")
        audio.play()
    }
    if (e.key==="#") {
        document.body.style.background = "orange"
        // document.querySelector("mi").style.background = "black"
        audio = new Audio("./audio/new-notification-7-210334.mp3")
        audio.play()
    }
    if (e.key==="7") {
        document.body.style.background = "orange"
        // document.querySelector("mi").style.background = "black"
        audio = new Audio("./audio/system-notification-199277.mp3")
        audio.play()
    }

})

