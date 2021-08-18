// index to bank.js transfer section setup

document.getElementById("form_btn").addEventListener("click", () => {
    let input_email = document.getElementById("input_email").value;
    let input_password = document.getElementById("input_password").value;

    // if (input_email === input_email && input_password == input_password && input_password != "" && input_email != "") {
    //     window.location.href = "bank.html";
    // } else {
    //     alert("invalid details")
    // }

    input_email != "" && input_password != "" ? window.location.href = "bank.html" : alert("invalid details");
})