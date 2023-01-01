import { sectionsLanding } from "../data/data"

const sections = sectionsLanding
const totalSections = sections.length

export const scrollToElement = (id) => {
    if (id === 'inicio') {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
        return
    }
    let scrollHeight = 0
    for (let i = 1; i < totalSections; i++) {
        const nameSection = sections[i].name
        const heightSection = sections[i].height
        if (nameSection === id) {
            window.scroll({
                top: scrollHeight,
                behavior: 'smooth'
            })
        } else {
            scrollHeight += heightSection
        }
    }
}

export const scrollTop = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}