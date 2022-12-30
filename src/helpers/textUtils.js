// first word capitalized
export const capitalizedWord = (text) => {
    const newText = text.charAt(0).toUpperCase() + text.substring(1)
    return newText
}