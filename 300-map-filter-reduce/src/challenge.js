import emojipedia from "./emojipedia.js"

const newEmojipedia = emojipedia.map(function (emojiEntry){
    return emojiEntry.meaning.substring(0, 100)
})

console.log(newEmojipedia);

// Note - By using map func. which maps through this 'emojipedia' array and for each of the 'emojiEntry' we have got the hold of 'meaning's' text and cut it down to first 100 characters & finally returned it to add it in that 'newEmojipedia' array.