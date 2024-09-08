document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-animation');
    const phrases = [" developer", " fast learner", " problem solver"];
    let index = 0;
    let charIndex = 0;
    let isTyping = true;

    function type() {
        if (isTyping) {
            if (charIndex < phrases[index].length) {
                textElement.textContent += phrases[index].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                isTyping = false;
                setTimeout(erase, 1000); // Pause before erasing
            }
        } else {
            if (charIndex > 0) {
                textElement.textContent = phrases[index].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(type, 50);
            } else {
                isTyping = true;
                index = (index + 1) % phrases.length;
                setTimeout(type, 500); // Pause before typing next phrase
            }
        }
    }

    function erase() {
        isTyping = false;
        type();
    }

    type();
});
