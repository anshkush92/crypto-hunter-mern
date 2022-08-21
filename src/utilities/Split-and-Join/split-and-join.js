// This function takes [] of string seperated by space and joins them without space
export const splitJoin = (word) => {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] !== " ") {
            newWord += word[i];
        }
    }
    return newWord;
}