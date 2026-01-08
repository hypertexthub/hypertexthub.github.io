
document.addEventListener("DOMContentLoaded", () => {
    const overlays = document.querySelectorAll(".overlay");

    if (overlays.length === 0) {
        console.error("No elements with class .overlay found");
        return;
    }

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // optional
                }
            });
        },
        { threshold: 0.3 }
    );

    overlays.forEach(overlay => observer.observe(overlay));
});

