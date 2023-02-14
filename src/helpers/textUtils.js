// first word capitalized
export const capitalizedWord = (text) => {
    const newText = text.charAt(0).toUpperCase() + text.substring(1)
    return newText
}

// All words capitalized
export const capitalizedText = (text) => {
    const words = text.split(' ')
    const wordsCapitalized = words.map((w) => capitalizedWord(w))
    const finalText = wordsCapitalized.join(' ')
    return finalText
}