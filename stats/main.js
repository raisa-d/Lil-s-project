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
