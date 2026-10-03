
const stars = document.querySelectorAll(".stars span");

const centerX = 50;
const centerY = 50;

stars.forEach((star) => {
    const left = parseFloat(getComputedStyle(star).getPropertyValue("--left"));
    const top = parseFloat(getComputedStyle(star).getPropertyValue("--top"));

    const distance = Math.sqrt(
        Math.pow(left - centerX, 2) +
        Math.pow(top - centerY, 2)
    );

    // 遠い星ほど少し長く移動する
    const duration = 2.8 + distance * 0.055;

    // 全ての星が同じタイミングで集まり始める
    star.style.setProperty("--gather-time", `${duration}s`);
    star.style.setProperty("--gather-delay", "7s");

    // 中央までの移動距離
    star.style.setProperty(
        "--move-x",
        `${centerX - left}vw`
    );

    star.style.setProperty(
        "--move-y",
        `${centerY - top}vh`
    );
});
