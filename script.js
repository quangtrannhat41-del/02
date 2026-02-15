const images = [
    "images/anh1.jpg",
    "images/anh2.jpg",
    "images/anh3.jpg"
];

const zone = document.getElementById("balloonZone");
const BALLOON_SIZE = 220;

/* TẠO BÓNG */
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    const img = document.createElement("img");
    const src = images[Math.floor(Math.random() * images.length)];
    img.src = src;

    img.onload = () => {
        const zoneWidth = zone.clientWidth;
        const padding = 20;
        const maxLeft = zoneWidth - BALLOON_SIZE - padding;

        balloon.style.left = Math.random() * maxLeft + "px";
        balloon.style.animationDuration = (9 + Math.random() * 3) + "s";

        balloon.appendChild(img);
        zone.appendChild(balloon);

        /* CLICK PHÓNG TO ẢNH */
        balloon.onclick = () => zoomImage(src);

        setTimeout(() => balloon.remove(), 13000);
    };
}

/* ZOOM ẢNH */
function zoomImage(src) {
    const overlay = document.createElement("div");
    overlay.className = "zoom";

    const img = document.createElement("img");
    img.src = src;

    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.onclick = () => overlay.remove();
}

/* TẦN SUẤT BÓNG (KHÔNG QUÁ NHIỀU) */
setInterval(createBalloon, 2600);
