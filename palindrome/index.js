const input = document.getElementById("input")




const isPalindrome = (str) => {
    let palindrome = "";
    for (let i = str.length - 1 ; i >= 0; i--){
        palindrome += str[i]
    }
    if (str == palindrome){
        alert("Its a palindrome!")
    } else {
        alert("hell nah!")
    }
    input.value = ""
}

function check() {
    const value = input.value
    const reverse = isPalindrome(value)
    
}
