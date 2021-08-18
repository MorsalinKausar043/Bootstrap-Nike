const getInputValue = (getInputPara) => {
    let inputAmount = parseFloat(document.getElementById(getInputPara).value);
    document.getElementById(getInputPara).value = "";
    return inputAmount;
};

const CurrentAmount = (currentInput, getValue) => {
    let previousAmount = parseFloat(document.getElementById(currentInput).innerText);
    document.getElementById(currentInput).innerText = (previousAmount + getValue);
};

const CurrentBalance = (balanceInput, getValue, Cutting) => {
    const previousBalance = parseFloat(document.getElementById(balanceInput).innerText);
    Cutting ? document.getElementById(balanceInput).innerText = previousBalance + getValue : document.getElementById(balanceInput).innerText = previousBalance - getValue;
};


document.getElementById("diposite_btn").addEventListener("click", () => {
    const getvalue = getInputValue('input_diposite');
    if (getvalue > 0 && getvalue != "") {
        CurrentAmount("current_diposite", getvalue);
        CurrentBalance("current_balance", getvalue, true);
    } else {
        alert("sry, input mistake");
    };

});

document.getElementById("withdraw_btn").addEventListener("click", () => {
    const getvalue = getInputValue("input_withdraw");
    if (getvalue > 0 && getvalue != "") {
        CurrentAmount("current_withdraw", getvalue);
        CurrentBalance("current_balance", getvalue, false);
    } else {
        alert("sry, input mistake");
    };
});