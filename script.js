const imageList = [
    "anh1.jpg",
    "anh2.jpg",
    "anh3.jpg"
];

const balloonZone = document.getElementById("balloonZone");
const BALLOON_WIDTH = 200;

// TẠO BÓNG
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    const img = document.createElement("img");
    const src = imageList[Math.floor(Math.random() * imageList.length)];
    img.src = src;

    img.onload = () => {
        const zoneWidth = balloonZone.clientWidth;
        const maxLeft = zoneWidth - BALLOON_WIDTH;

        balloon.style.left = Math.random() * maxLeft + "px";
        balloon.style.animationDuration = (8 + Math.random() * 3) + "s";

        balloon.appendChild(img);
        balloonZone.appendChild(balloon);

        // CLICK → PHÓNG TO
        balloon.onclick = () => zoomImage(src);

        setTimeout(() => balloon.remove(), 11000);
    };
}

// PHÓNG TO ẢNH
function zoomImage(src) {
    const overlay = document.createElement("div");
    overlay.className = "zoom";

    const img = document.createElement("img");
    img.src = src;

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.onclick = () => overlay.remove();
}

// GIẢM TẦN SUẤT
setInterval(createBalloon, 2200);
