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

// const mountainDoorImg = document.querySelector('#mountainDoorImg');
// mountainDoorImg.addEventListener('load', function () {
//     let doorSelectionElement = document.querySelector('.doorSelectionText');
//     let doorSelectionText = document.querySelector('.wizardScene').getAttribute('data-text');
//     typingEffect(doorSelectionElement, doorSelectionText, 300)
// })


//callback for IntersectionObserver
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            //start typing when section in view
            const targetElement = entry.target.querySelector('.typing-text');
            const text = entry.target.getAttribute('data-text');
            typingEffect(targetElement, text, 60) //100ms per character

            // //stop observing section after it starts the effect
            observer.unobserve(entry.target);
        }
    });
};

//IntersectionObserver for multiple sections
const sections = document.querySelectorAll('.prologueScene');
const observer = new IntersectionObserver(callback, {
    root: null, //viewport is root
});

//observe all sections
sections.forEach(section => {
    observer.observe(section)
});

//fade in images
const dungeonButton = document.querySelector('#dungeonButton');
dungeonButton.addEventListener('click', showTravelerImg);

function showTravelerImg() {
    document.querySelector('#travelerImg').classList.add('fade-in');
}

const travelerButton = document.querySelector('#travelerButton');
travelerButton.addEventListener('click', showCastleImg);

function showCastleImg() {
    document.querySelector('#castleImg').classList.add('fade-in');
}

const castleButton = document.querySelector('#castleButton');
castleButton.addEventListener('click', showConvoImg);

function showConvoImg() {
    document.querySelector('#convoImg').classList.add('fade-in');
}

//transition from first few prologue scenes to wizard arc door scenes
const convoButton = document.querySelector('#convoButton')
convoButton.addEventListener('click', loadWizardScene)
function loadWizardScene() {
    document.querySelectorAll('.prologueScene').forEach(scene => scene.style.display = 'none');
    document.querySelector('.wizard-container').style.display = 'flex'

    let doorSelectionElement = document.querySelector('.doorSelectionText');
    let doorSelectionText = document.querySelector('.wizardScene').getAttribute('data-text');
    typingEffect(doorSelectionElement, doorSelectionText, 80)
}

//disappearing doors - wizard arc
const mountainDoor = document.querySelector('#mountaindoor');
const beachDoor = document.querySelector('#beachdoor');
const countrysideDoor = document.querySelector('#countrysidedoor');

beachDoor.addEventListener('click', removeDoor);
countrysideDoor.addEventListener('click', removeDoor);
mountainDoor.addEventListener('click', khDoor);

function removeDoor(event) {
    //hide clicked door
    event.target.style.display = 'none';

    //are both doors hidden? 
    if (beachDoor.style.display === 'none' && countrysideDoor.style.display === 'none') {
        document.querySelector('.doorSelectionText').innerText = 'the cursed mountain package? great choice!';

        setTimeout(() => {
            mountainDoor.style.display = 'none';
        }, 1000);

        setTimeout(() => {
            document.querySelector('.wizard-container').style.display = 'none';
            document.querySelector('.ominous-door').style.display = 'flex';
            document.querySelector('body').style.backgroundColor = 'rgb(1, 4, 0)';
        }, 3000);

        khDoor();
    }
}

function khDoor() {
    beachDoor.style.display = 'none';
    countrysideDoor.style.display = 'none'

    document.querySelector('.doorSelectionText').innerText = 'the cursed mountain package? great choice!';

    setTimeout(() => {
        mountainDoor.style.display = 'none';
    }, 1000);

    setTimeout(() => {
        document.querySelector('.wizard-container').style.display = 'none';
        document.querySelector('.ominous-door').style.display = 'flex';
        document.querySelector('body').style.backgroundColor = 'rgb(1, 4, 0)';
    }, 3000);

    setTimeout(() => {
        window.location.href = '../stats/index.html';
    }, 7500);
}