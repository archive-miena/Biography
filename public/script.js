const year = document.querySelector("footer p");

if (year) {
year.innerHTML = "© ${new Date().getFullYear()} Anne Yomie. Made with love ♡";
}

window.addEventListener("load", function() {

document.body.classList.add("loaded");

console.log("Welcome to Anne Yomie's Website! ♡");

});

const revealElements = document.querySelectorAll(
".about-card, .hobby-card, .favorite-card, .organization-card, .contact-box"
);

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

    if (entry.isIntersecting) {

        entry.target.style.animation = "fadeUp 0.8s ease forwards";

        observer.unobserve(entry.target);

    }

});

}, {
threshold: 0.15
});

revealElements.forEach((element) => {

observer.observe(element);

});

window.addEventListener("scroll", function() {

const navbar = document.querySelector(".navbar");

if (window.scrollY > 50) {

    navbar.style.boxShadow = "0 5px 20px #f5b5cc50";

} else {

    navbar.style.boxShadow = "none";

}

});

const contactButtons = document.querySelectorAll(
".contact-buttons a"
);

contactButtons.forEach((button) => {

button.addEventListener("mouseenter", function() {

    button.style.transform = "translateY(-5px)";

});

button.addEventListener("mouseleave", function() {

    button.style.transform = "translateY(0)";

});

});

document.querySelectorAll('a[href^="#"]').forEach((link) => {

link.addEventListener("click", function(event) {

    const target = document.querySelector(
        this.getAttribute("href")
    );

    if (target) {

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    }

});

});