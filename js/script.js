document.addEventListener("DOMContentLoaded", function () {
    function typeEffect(element, text, speed) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML = text.substring(0, i + 1) + "<span class='cursor'>|</span>";
                i++;
                setTimeout(typing, speed);
            } else {
                element.innerHTML = text + "<span class='cursor'>|</span>"; // Keep cursor at end
            }
        }
        typing();
    }

    const textElement = document.getElementById("typed-text");
    typeEffect(textElement, "I'm Nathan Smith, welcome.", 100);
});
