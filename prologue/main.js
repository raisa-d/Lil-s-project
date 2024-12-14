function typingEffect(element, text, speed) {
    let i = 0;
    let txt = '';
    const length = text.length;

    function updateText() {
        if (i < length) {
            txt += text.charAt(i);
            element.textContent = txt; //update text in element
            i++;
            setTimeout(updateText, speed)
        }
    }

    updateText();
}

//callback for IntersectionObserver
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            //start typing when section in view
            const targetElement = entry.target.querySelector('.typing-text');
            const text = entry.target.getAttribute('data-text');
            typingEffect(targetElement, text, 60) //100ms per character

            //stop observing section after it starts the effect
            observer.unobserve(entry.target)
        }
    });
};

//IntersectionObserver for multiple sections
const sections = document.querySelectorAll('.prologueScene');
const observer = new IntersectionObserver(callback, {
    root: null, //viewport is root
    threshold: 1 //trigger when whole section in view **
});

//observe all sections
sections.forEach(section => {
    observer.observe(section)
});