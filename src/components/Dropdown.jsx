import React from 'react'
import PropTypes from 'prop-types'
import { capitalizedWord } from '../helpers/textUtils'
import { sectionsLanding } from '../data/data'
import { scrollToElement } from '../helpers/scroll'

const Dropdown = ({ setList }) => {
    const sections = sectionsLanding
    const lengthSection = sections.length
    const heightDropdown = (lengthSection - 3) * 40 + 92
    const scrollTo = (id) => {
        setList(false)
        scrollToElement(id)
    }
    return (
        <div className='header_menu-logo dropdown_main-container' style={{
            marginBottom: -heightDropdown
        }}>
            <ul>
                {
                    sections.map((sec, i) => {
                        const name = sec.name
                        return (
                            <li key={i}>
                                <div onClick={() => scrollTo(name)}>
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
    setList: PropTypes.func.isRequired,
}

export default Dropdown