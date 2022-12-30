import { useState } from 'react'
import PropTypes from 'prop-types'
import { capitalizedWord } from '../helpers/textUtils'
import MenuIcon from '@mui/icons-material/Menu'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Dropdown from './Dropdown'

const Header = ({ currentSection, sections }) => {
    // const [top, setTop] = useState(true)
    // window.addEventListener("scroll", (_) => {
    //     const scroll = window.scrollY;
    //     if (scroll > 0 && scroll) setTop(false)
    //     if (scroll === 0 && !scroll) setTop(true)
    // })
    const [dropdown, setDropdown] = useState(false)
    const props = {
        currentSection,
        sections
    }
    const scrollToElement = (id) => {
        if (id === 'inicio') {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
            return
        }
        const section = document.getElementById(id)
        section?.scrollIntoView({
            behavior: 'smooth'
        })
    }
    // console.log(currentSection)
    const height = sections[0].height
    return (
        <div style={{
            position: 'sticky',
        top: '0px',
        zIndex: 1
        }}>

        <header className='header_container' style={{
            backgroundColor: '#282c38', //TODO:
            height
        }}>
            <div className='header_text-container'>
                {/* // TODO: this and dropdown */}
                <a href="index.html">
                    <img className='_logo-height' src="assets/images/logo/dahu.png" alt="Logo" />
                </a>
                {
                    !dropdown && (

                <div className='header_menu-logo' onClick={() => setDropdown(true)}>
                    <MenuIcon sx={{ fontSize: 34, cursor: 'pointer', color: 'white' }} />
                </div>
                    )
                }
                {
                    dropdown && (
                <div className='header_menu-logo' onClick={() => setDropdown(false)}>
                    <CloseOutlinedIcon sx={{ fontSize: 34, cursor: 'pointer', color: 'white' }} />
                </div>
                    )
                }
                <ul className='header_menu-list'>
                    {
                        sections.map((sec, i) => {
                            const headerSection = i === 0 || i === sections.length - 1
                            const item = sec.name
                            const selectedSection = currentSection === item
                            return (
                                <li className='header_menu-item' key={item}
                                style={{
                                    display: !headerSection ? 'flex' : 'none',
                                    borderBottom: `3px solid ${selectedSection ? '#ff153c' : 'transparent'}`,
                                    color: `${selectedSection ? '#ff153c' : 'white'}`,
                                    fontWeight: `${selectedSection ? 'bold' : 'lighter'}`
                                }}>
                                    <p className='_pointer' onClick={() => scrollToElement(item)}>{capitalizedWord(item)}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </header >
        {
            dropdown && (
                <Dropdown {...props}/>
            )
        }
        </div>
    )
}

Header.propTypes = {
    currentSection: PropTypes.string,
    sections: PropTypes.array
}

export default Header