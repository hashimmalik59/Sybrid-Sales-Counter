let count = 0;
document.querySelector(".decre").onclick = function () {
    count -= 1;
    document.querySelector(".counter-display").innerHTML = count;
};
document.querySelector(".rst").onclick = function () {
    count = 0;
    document.querySelector(".counter-display").innerHTML = count;
};
document.querySelector(".incre").onclick = function () {
    count += 1;
    if (count === 130) {
        let go = document.querySelector(".go");
        go.innerHTML = "Congratulations!";
    }
    else if (count > 0) {
        let go = document.querySelector(".go");
        go.innerHTML = "Never Give Up!";
    }
    document.querySelector(".counter-display").innerHTML = count;
};