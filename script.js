 
// NEXORA - Optimized Mobile Navigation

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    // Update menu state in one place
    function setMenuOpen(isOpen) {
        navigation.classList.toggle("active", isOpen);

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    }

    // Toggle menu on button click
    menuToggle.addEventListener("click", function () {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        setMenuOpen(!isOpen);
    });

    // Close menu after selecting a navigation link
    navigation.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            setMenuOpen(false);
        }
    });

    // Close menu using Escape key
    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            menuToggle.getAttribute("aria-expanded") === "true"
        ) {
            setMenuOpen(false);
            menuToggle.focus();
        }
    });

    // Close menu when switching to desktop layout
    const desktopQuery = window.matchMedia("(min-width: 701px)");

    desktopQuery.addEventListener("change", function (event) {
        if (event.matches) {
            setMenuOpen(false);
        }
    });
}
