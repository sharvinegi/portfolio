document.addEventListener("DOMContentLoaded", function() {
    var text = "HIMANSHI SHARMA";
    var typingAnimationElement = document.getElementById("typing-animation");
    var index = 0;

    function type() {
        if (index < text.length) {
            typingAnimationElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150); 
        }
    }

    type();
});
