// string in reverse order is same e.g. "abba" is palindrome 

const isPalindrome = (str)=>{
    return str === str.split('').reverse().join('');
}

let result = isPalindrome("abba");
result