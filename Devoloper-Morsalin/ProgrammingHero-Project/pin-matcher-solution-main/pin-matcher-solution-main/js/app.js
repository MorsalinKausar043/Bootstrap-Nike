const generatPin = () => {
    const pin = Math.round(Math.random() * 9999);
    let pinlength = pin + "";
    if (pinlength.length == 4) {
        return pin;
    } else {
        alert("there is something wrong!", pin)
    }
};

document.getElementById("generatePin").addEventListener("click", () => {
    const pin = generatPin();
    document.getElementById('display-pin').value = pin;
});

document.getElementById("key-pad").addEventListener("click", (e) => {
    const number = e.target.innerText;
    const clcInput = document.getElementById("typed-numbers");
    if (isNaN(number)) {
        if (number == "C") {
            clcInput.value = "";
        }
    } else {
        const previousNumber = clcInput.value;
        const inputNumber = previousNumber + number;
        clcInput.value = inputNumber;
    }
});

document.getElementById("verifyPin").addEventListener("click", () => {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById("typed-numbers").value;
    const fail_input = document.getElementById("notify-fail");
    const success_input = document.getElementById("notify-success");
    if (pin == typedNumbers) {
        fail_input.style.display = "none";
        success_input.style.display = "block"
    } else {
        fail_input.style.display = "block";
        success_input.style.display = "none"
    }
})