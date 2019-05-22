
/*
function isPalindrome(str, reversed = '', i = 0){
    // add whatever parameters you deem necessary - good luck!
    if(str === reversed) return true;
    if(str.length === reversed.length && str !== reversed) return false;
    return isPalindrome(str, reversed += str[(str.length - 1) - i], i + 1);
}
*/
function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    return str[0] !== str.slice(-1) ? false : isPalindrome(str.slice(1,-1));
}
console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));// false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false