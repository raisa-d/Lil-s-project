//rotate through dialogue with each button click

const replySpace = document.getElementById('replySpace');

let replyButton = document.querySelector('#replyButton');
replyButton.addEventListener('click', nextDialogue)

const dialogueText = ['the representative for croissant mountain. the place you happen to be trespassing on', 'cursed mountain? they still call it that? it\'s perfectly safe, but the wizard sends adventurers here as pranks all the time', 'it\'s way too dark out. Might as well explore the campsite until you\'re ready to go in the morning']
let index = 0;

const buttonText = ['croissant mountain? I thought the wizard sent me to the cursed mountain', 'I need to get back and find that wizard', 'sure, i\'ll take a look around']
let buttonIndex = 0;

function nextDialogue() {
    console.log(buttonIndex);
    if (index < dialogueText.length) {
        replySpace.innerText = dialogueText[index];
        index = (index + 1);
    }

    if (index > 0 && index < 4) {
        replyButton.innerText = buttonText[buttonIndex];
        buttonIndex = (buttonIndex + 1)
    }

    if (buttonIndex == 4) {
        replyButton.style.visibility = 'hidden';
        replySpace.innerText = 'Have fun!'
    }
};

//greenhouse nav: changing the bg
const greenhouseNav = document.querySelector('#music-button');
greenhouseNav.addEventListener('click', greenhouseMood);

function greenhouseMood() {
    console.log('greenhouse clicked');
    document.querySelector('.stats-screen').style.display = 'none';
    document.querySelector('.greenhouse').style.display = 'flex'
    document.querySelector('.homepage-container').classList.add('greenhouseBg');
    document.querySelector('#greenhouse-topbar').classList.add('purple');

    document.querySelector('nav').classList.add('purple')
    document.querySelector('.greenhouse').style.backgroundColor = 'rgb(207, 218, 155)'
    document.querySelector('audio').style.visibility = 'visible';

    //remove cliff conditions
    document.querySelector('.homepage-container').classList.remove('cliffBg');
}

//plant audio picker
const plants = document.querySelectorAll('.plant');
const audioPlayer = document.getElementById('audio-player')

plants.forEach(plant => {
    plant.addEventListener('click', () => {
        //get audio file name from data-audio-attribute
        const audioFile = plant.getAttribute('data-audio');

        //set source of audio player
        audioPlayer.src = `audio/${audioFile}.mp3`

        //play audio
        audioPlayer.play();
    });
})

//plant 1: Sugar High - Jeremy Korpas.mp3
//plant 2: where'd the sun go - Ryan McCaffrey
//plant 3: moving in the shadows - the soundlings
//plant 4: under the sun - everet almond

//clicking message button 
const messageButton = document.querySelector('#message-button');
messageButton.addEventListener('click', loadCliffConditions);

function loadCliffConditions() {
    document.querySelector('.greenhouse').style.display = 'none';
    document.querySelector('.stats-screen').style.display = 'none';
    //undo greenhouse effects
    document.querySelector('.homepage-container').classList.remove('greenhouseBg');
    document.querySelector('#greenhouse-topbar').classList.remove('purple');
    document.querySelector('nav').classList.remove('purple');

    document.querySelector('audio').style.visibility = 'hidden';
    document.querySelector('.homepage-container').classList.add('cliffBg');
}

//yelling into the void
const yellButton = document.querySelector('#yell-button');
yellButton.addEventListener('click', screamInput);

function screamInput() {
    const input = document.querySelector('textarea').value;
    const screamingSpace = document.querySelector('.screaming-space');

    //hide textarea & yell button
    document.querySelector('textarea').style.visibility = 'hidden';
    yellButton.style.visibility = 'hidden';

    //reset text and remove animation
    screamingSpace.innerText = '';
    screamingSpace.classList.remove('show-text');

    setTimeout(() => {
        screamingSpace.innerText = input.toUpperCase();
        screamingSpace.classList.add('show-text');
    }, 200)

    //show yell again button
    document.querySelector('#yell-again').style.visibility = 'visible';
}

//yell again
const yellAgainButton = document.querySelector('#yell-again');
yellAgainButton.addEventListener('click', yellAgain)

function yellAgain() {
    yellAgainButton.style.visibility = 'hidden';
    document.querySelector('textarea').style.visibility = 'visible';
    yellButton.style.visibility = 'visible';
}


//home nav button click: resetting 
