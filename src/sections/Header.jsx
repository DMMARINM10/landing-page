import { useState } from 'react'
import { capitalizedWord } from '../helpers/textUtils'
import MenuIcon from '@mui/icons-material/Menu'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Dropdown from '../components/Dropdown'
import { sectionsLanding } from '../data/data';
import { dropdown } from '../helpers/dropdown';
import { scrollToElement } from '../helpers/scroll';

const sections = sectionsLanding

const Header = () => {
    
    const [list, setList] = useState(false)
    dropdown(list, setList)

    const height = sections[0].height

    const props = {
        setList
    }

    const iconStyle = {
        fontSize: 34,
        cursor: 'pointer',
        color: 'white'
    }

    return (
        <div className='header_main-container'>
            <header style={{
                height
            }}>
                <div className='header_text-container'>
                    <img className='_logo-height' src="assets/images/logo/dahu.png" alt="Logo" />
                    {
                        !list && (
                            <div className='header_menu-logo' onClick={() => setList(true)}>
                                <MenuIcon sx={iconStyle} />
                            </div>
                        )
                    }
                    {
                        list && (
                            <div className='header_menu-logo' onClick={() => setList(false)}>
                                <CloseOutlinedIcon sx={iconStyle} />
                            </div>
                        )
                    }
                    <ul className='header_menu-list'>
                        {
                            sections.map((sec, _) => {
                                const item = sec.name
                                return (
                                    <li key={item}>
                                        <p className='_pointer' 
                                            onClick={() => scrollToElement(item)}
                                        >
                                            {capitalizedWord(item)}
                                        </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </header >
            {
                list && (
                    <Dropdown {...props} />
                )
            }
        </div>
    )
}

export default Header