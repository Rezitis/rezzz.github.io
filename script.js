let firstClickDone = false;
const correctCode = "μελισσας";

function firstClick() {
    if (!firstClickDone) {
        document.getElementById('code-prompt').classList.remove('hidden');
        firstClickDone = true;
    }
}

function checkCode() {
    const userInput = document.getElementById('code-input').value.trim().toLowerCase();
    if (userInput === correctCode) {
        openGift();
    } else {
        alert("Incorrect code. Try again!");
    }
}

function openGift() {
    const giftBox = document.getElementById('gift-box');
    giftBox.style.transition = 'transform 1s';
    giftBox.style.transform = 'rotateY(180deg)';
    
    setTimeout(() => {
        giftBox.style.display = 'none';
        document.getElementById('message').innerText = "εισαι κακος στο σιτζ";
        document.getElementById('message').classList.remove('hidden');
    }, 1000);
}
