let slideNumber = document.querySelector(".slideNumber");
let bullets = document.querySelector(".bullets");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let imgCount = Array.from(document.querySelectorAll("img"));

currentSlide = 3;


let ul = document.createElement("ul");
imgCount.forEach((e, i) => {
    let li = document.createElement("li");
    li.dataset.index = i + 1;
    li.innerHTML = i + 1;
    ul.appendChild(li);
    bullets.appendChild(ul);
});

document.querySelectorAll("li").forEach((e) => {
    e.addEventListener("click", (a) => {
        currentSlide = parseInt(a.target.getAttribute("data-index"));
        checking();
    })
})

prev.onclick = prevf
next.onclick = nextf

function prevf() {
    if (currentSlide === 1) {

    } else {
        currentSlide--;
        checking();
    }
}
function nextf() {
    if (currentSlide === imgCount.length) {

    } else {
        currentSlide++;
        checking();
    }
}
let lis = document.querySelectorAll("li");
function checking() {
    slideNumber.innerHTML = `Slide #${currentSlide} Of ${imgCount.length}`;
    removeActive()
    imgCount[currentSlide - 1].classList.add("active");
    lis[currentSlide - 1].classList.add("active");
    if (currentSlide === 1) {
        prev.classList.add("disabled");
    } else {
        prev.classList.remove("disabled");
    }
    if (currentSlide === imgCount.length) {
        next.classList.add("disabled");
    } else {
        next.classList.remove("disabled");
    }

};

function removeActive() {
    imgCount.forEach((e) => {
        e.classList.remove("active");
    })
    lis.forEach((e) => {
        e.classList.remove("active");
    })

}
imgCount[currentSlide - 1].classList.add("active")
lis[currentSlide - 1].classList.add("active")
checking()