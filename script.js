document.addEventListener("DOMContentLoaded", () => {

    /* ===== IMAGE LIST (LOCAL – SAFE) ===== */
    const IMAGE_URLS = [
        "images/anh1.jpg",
        "images/anh2.jpg",
        "images/anh3.jpg",
        "images/anh4.jpg",
        "images/anh5.jpg",
        "images/anh6.jpg",
        "images/anh7.jpg",
        "images/anh8.jpg",
        "images/anh9.jpg",
        "images/anh10.jpg",
        "images/anh11.jpg",
        "images/anh12.jpg"
    ];

    const MAX_BALLOONS = 4;
    const SPAWN_INTERVAL = 1800;
    const BALLOON_SIZE = 140;

    const zone = document.getElementById("balloonZone");

    /* ===== PRELOAD IMAGES ===== */
    const imagePool = IMAGE_URLS.map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });

    /* ===== BALLOON POOL ===== */
    const balloonPool = [];
    let active = 0;

    function createBalloonElement() {
        const balloon = document.createElement("div");
        balloon.className = "balloon";

        const img = document.createElement("img");
        balloon.appendChild(img);

        balloon.onclick = () => zoom(img.src);
        return balloon;
    }

    function getBalloon() {
        return balloonPool.pop() || createBalloonElement();
    }

    function releaseBalloon(balloon) {
        balloon.remove();
        balloonPool.push(balloon);
        active--;
    }

    function spawnBalloon() {
        if (active >= MAX_BALLOONS) return;

        const balloon = getBalloon();
        const img = balloon.querySelector("img");

        img.src = imagePool[Math.floor(Math.random() * imagePool.length)].src;

        const maxLeft = zone.clientWidth - BALLOON_SIZE;
        balloon.style.left = Math.random() * maxLeft + "px";
        balloon.style.animationDuration = (6 + Math.random() * 4) + "s";

        zone.appendChild(balloon);
        active++;

        setTimeout(() => releaseBalloon(balloon), 11000);
    }

    setInterval(spawnBalloon, SPAWN_INTERVAL);

    /* ===== ZOOM IMAGE ===== */
    function zoom(src) {
        const overlay = document.createElement("div");
        overlay.className = "zoom";

        const img = document.createElement("img");
        img.src = src;

        overlay.appendChild(img);
        document.body.appendChild(overlay);
        overlay.onclick = () => overlay.remove();
    }

});
