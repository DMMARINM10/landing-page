export const scrollToElement = (id) => {
    const element = document.getElementById(id)
    element.scrollIntoView({
        behavior: 'smooth'
    })
}

export const scrollTop = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}