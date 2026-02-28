const btn = document.querySelector("#bigger");
const mooBtn = document.querySelector("#moo");
const radioBtnFancy = document.querySelector("#fancy");
const radioBtnBoring = document.querySelector("#boring");

radioBtnFancy.addEventListener("click", makeTextFancy);
radioBtnBoring.addEventListener("click", makeTextBoring);

function changeFontSize() {
    alert("hi");
    document.getElementById("textArea").style.fontSize="24pt";
}

function moo() {
    let userInput = document.getElementById("textArea").value;
    userInput = userInput.toUpperCase();
    let dividedInput = userInput.split(".");

    for (let i = 0; i < dividedInput.length; i++) {
        dividedInput[i] = dividedInput[i] + " Moo";
    }

    userInput = dividedInput.join(" ");
    document.getElementById("textArea").value = userInput;
}

function makeTextBoring() {
    document.getElementById("textArea").style.fontFamily="monospace";
    document.getElementById("textArea").style.color="#000000";
    document.getElementById("textArea").style.fontWeight="normal";
    document.getElementById("textArea").style.textDecoration="none";
}

function makeTextFancy() {
    document.getElementById("textArea").style.fontFamily="\"papyrus\", \"garamond\", fantasy";
    document.getElementById("textArea").style.color="#0054c9";
    document.getElementById("textArea").style.fontWeight="bold";
    document.getElementById("textArea").style.textDecoration="underline #00b3ff";
}

btn.onclick = changeFontSize;
mooBtn.onclick = moo;