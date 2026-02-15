// Danh sách ảnh dùng cho bóng bay
const imageList = [
    "images/anh1.jpg",
    "images/anh2.jpg",
    "images/anh3.jpg"
];

// Khu vực bóng bay (ở giữa thiệp)
const balloonZone = document.getElementById("balloonZone");

// Hàm tạo 1 quả bóng bay
function createBalloon() {
    // Tạo div bóng
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    // Tạo ảnh trong bóng
    const img = document.createElement("img");
    img.src = imageList[Math.floor(Math.random() * imageList.length)];

    // Vị trí ngẫu nhiên trong balloon-zone
    const zoneWidth = balloonZone.clientWidth;
    const balloonWidth = 140; // phải khớp với CSS
    const maxLeft = zoneWidth - balloonWidth;

    balloon.style.left = Math.random() * maxLeft + "px";

    // Thời gian bay ngẫu nhiên (mượt hơn)
    const duration = 5 + Math.random() * 2;
    balloon.style.animationDuration = duration + "s";

    // Gắn ảnh vào bóng
    balloon.appendChild(img);

    // Gắn bóng vào khu vực
    balloonZone.appendChild(balloon);

    // Xóa bóng sau khi bay xong (tránh lag)
    setTimeout(() => {
        balloon.remove();
    }, duration * 1000);
}

// Tạo bóng bay liên tục
setInterval(createBalloon, 900);
