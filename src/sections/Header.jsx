import { useState } from 'react'
import { capitalizedWord } from '../helpers/textUtils'
import MenuIcon from '@mui/icons-material/Menu'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Dropdown from '../components/Dropdown'
import UpButton from '../components/UpButton';
import { sectionsLanding } from '../data/data';
import useCurrentSection from '../hooks/useCurrentSection';
import useDropdown from '../hooks/useDropdown';
import { scrollToElement } from '../helpers/scroll';

const sections = sectionsLanding

const Header = () => {
    const [upButton, setUpButton] = useState(false)
    const [currentSection, setCurrentSection] = useState('inicio')
    const [dropdown, setDropdown] = useState(false)
    useDropdown(dropdown, setDropdown)
	useCurrentSection(sections, currentSection, setCurrentSection)
    const firstSectionName = sections[1].name
    if (currentSection !== firstSectionName) {
        if (!upButton) setUpButton(true)
    } else {
        if (upButton) setUpButton(false)
    }

    const heightHeader = sections[0].height
    const totalSections = sections.length

    const props = {
        currentSection,
        setDropdown
    }
    const iconStyle = {
        fontSize: 34,
        cursor: 'pointer',
        color: 'white'
    }
    return (
        <div className='header_main-container'>
            <header className='header_container' style={{
                height: heightHeader
            }}>
                <div className='header_text-container'>
                    <img className='_logo-height' src="assets/images/logo/dahu.png" alt="Logo" />
                    {
                        !dropdown && (

                            <div className='header_menu-logo' onClick={() => setDropdown(true)}>
                                <MenuIcon sx={iconStyle} />
                            </div>
                        )
                    }
                    {
                        dropdown && (
                            <div className='header_menu-logo' onClick={() => setDropdown(false)}>
                                <CloseOutlinedIcon sx={iconStyle} />
                            </div>
                        )
                    }
                    <ul className='header_menu-list'>
                        {
                            sections.map((sec, i) => {
                                const headerSection = i === 0 || i === totalSections - 1
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
                    <Dropdown {...props} />
                )
            }
            {
                upButton && (
                    <UpButton />
                )
            }
        </div>
    )
}

export default Header