const messages = [
    "Are you sure?",
    "Really sure??",
    "Jaanu please...",
    "Don't do this to me :(",
    "I will buy you Chocolates 🍫",
    "I'll give you my hoodie!",
    "I'll even let you win in kaleshes!",
    "If you say no, I'm gonna be cooked...",
    "I'll just stare at the ceiling...",
    "I will be very very sad...",
    "I'm literally crying rn...",
    "My heart is breaking... 💔",
    "Pretty please with a cherry on top? 🍒",
    "Ok fine, I will stop asking...",
    "Just kidding, SAY YES GUGGUU! ❤️"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}