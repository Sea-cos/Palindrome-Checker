const result = document.getElementById("result")
const btn = document.getElementById("check-btn");

function isPalindrome(str) {

    str = str.replace(/\s/g, "").toLowerCase();
    str = str.replace(/[^a-z0-9]/gi, "");
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

function check() {
    const input = document.getElementById("text-input").value
    const check = isPalindrome(input)

    if (input == "") {
        alert("Please input a value");

    } else {
        if (check) {
            result.textContent = input + " is a palindrome";
        } else {
            result.textContent = input + " is not a palindrome";
        }

    }
}



