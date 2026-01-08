<script>
    const overlay = document.querySelector(".overlay");

    const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {
        overlay.classList.add("visible");
        }
    },
    {threshold: 0.3 }
    );

    observer.observe(overlay);
</script>
