import React from 'react'
import PropTypes from 'prop-types'
import { capitalizedWord } from '../helpers/textUtils'
import { sectionsLanding } from '../data/data'
import { scrollToElement } from '../helpers/scroll'

const Dropdown = ({ currentSection, setDropdown }) => {
    const sections = sectionsLanding
    const lengthSection = sections.length
    const heightDropdown = (lengthSection - 3) * 40 + 92
    const scrollTo = (id) => {
        setDropdown(false)
        scrollToElement(id)
    }
    return (
        <div className='header_menu-logo dropdown_main-container' style={{
            marginBottom: -heightDropdown
        }}>
            <ul className='dropdown_list-container'>
                {
                    sections.map((sec, i) => {
                        const name = sec.name
                        const selectedSection = currentSection === name
                        if (i === 0 || i === lengthSection - 1) return
                        return (
                            <li key={i} className='dropdown_item' style={{
                                height: i === lengthSection - 2 ? '30px' : '40px'
                            }}>
                                <div className='dropdown_item-name' style={{
                                    borderBottom: `3px solid ${selectedSection ? '#ff153c' : 'transparent'}`,
                                    color: `${selectedSection ? '#ff153c' : 'gray'}`,
                                    fontWeight: `${selectedSection ? 'bold' : 'lighter'}`
                                }} onClick={() => scrollTo(name)}>
                                    {capitalizedWord(name)}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

Dropdown.propTypes = {
    currentSection: PropTypes.string.isRequired,
    setDropdown: PropTypes.func.isRequired,
}

export default Dropdown