commonCharacters ("I love the smell of flowers" , "flowers smell like love")
const commonCharacters = function (string1, string2){
    let duplicateCharacters = "";
    for (let i = 0; i < string1.length; i += 1){
        if (duplicateCharacters.indexOf(string1[i]) === -1){
            if (string2.indexOf(string1[i]) !== -1) {
            duplicateCharacters += string1[i];
            }
        }
    }
    return duplicateCharacters;
}
