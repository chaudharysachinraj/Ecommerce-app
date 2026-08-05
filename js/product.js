const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        // Remove Active Class
        tabs.forEach((item) => {
            item.classList.remove("active");
        });

        tabContents.forEach((content) => {
            content.classList.remove("active");
        });

        // Add Active Class
        tab.classList.add("active");

        const target = tab.dataset.tab;

        document.getElementById(target).classList.add("active");

    });

});