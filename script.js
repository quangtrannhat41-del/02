const balloonImages = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg"
];

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    const img = document.createElement("img");
    img.src = balloonImages[Math.floor(Math.random() * balloonImages.length)];

    balloon.style.left = Math.random() * 90 + "vw";
    balloon.style.animationDuration = 6 + Math.random() * 4 + "s";

    balloon.appendChild(img);
    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 10000);
}

// tạo bóng bay liên tục
setInterval(createBalloon, 800);
