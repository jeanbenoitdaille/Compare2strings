function compareStrings(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    for (let i = 0; i < s1.length; i++) {
        let char1 = s1[i];
        let char2 = s2[i];
        if (char1 !== char2) {
            return false;
        }
    }
    return true;
}
 
 
let firstCheck = compareStrings("Hello world", "Hello world");
let secondCheck = compareStrings("Hello world", "Goodbye world");