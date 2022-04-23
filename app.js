// Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
// Animate Items
const title = document.querySelector('.title');
const javascript = document.querySelector('.javascript img');
const description = document.querySelector('.info h3');
const versions = document.querySelector('.versions button');
const details = document.querySelector('.details button');

// Movement Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/12;
    let yAxis = (window.innerHeight / 2 - e.pageY)/12;

    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";

    // popout
    title.style.transform = "translateZ(150px)";
    javascript.style.transform = "translateZ(150px) rotateZ(-45deg)";
    description.style.transform = "translateZ(150px)";
    versions.style.transform = "translateZ(150px)";
    details.style.transform = "translateZ(150px)";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    // popout
    title.style.transform = "translateZ(0px)";
    javascript.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    versions.style.transform = "translateZ(0px)";
    details.style.transform = "translateZ(0px)";
});

