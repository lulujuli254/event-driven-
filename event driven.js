// Created by lucy njoki

document.addEventListener("DOMContentLoaded", function () {
    const memeImage = document.getElementById("memeImage");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    let isMoving = false;
    let moveInterval;

    // Function to move the meme image around the page
    function moveMeme() {
        const maxX = window.innerWidth - memeImage.clientWidth;
        const maxY = window.innerHeight - memeImage.clientHeight;

        memeImage.style.left = Math.random() * maxX + "px";
        memeImage.style.top = Math.random() * maxY + "px";
    }

    // Start button click event
    startButton.addEventListener("click", function () {
        if (!isMoving) {
            isMoving = true;
            startButton.disabled = true;
            stopButton.disabled = false;
            moveInterval = setInterval(moveMeme, 1000);
        }
    });

    // Stop button click event
    stopButton.addEventListener("click", function () {
        if (isMoving) {
            isMoving = false;
            startButton.disabled = false;
            stopButton.disabled = true;
            clearInterval(moveInterval);
        }
    });
});
