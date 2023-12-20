window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth <= 430) {
        $(".navbar-brand").html("<img class='nav-brandimg' src='https://res.cloudinary.com/dbqqjaqqa/image/upload/v1489761620/logo_mini_pou3vz.png'>");
    } else {
        $(".navbar-brand").html("<img class='nav-brandimg' src='https://res.cloudinary.com/dbqqjaqqa/image/upload/v1489836162/smaller_size_logo_wigzr1.png'>");
    }
});
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
    return document.documentElement || document.body;
};
const goToTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden")
    } else {
        backToTopButton.classList.add("hidden")
    }
})
backToTopButton.addEventListener("click", goToTop)