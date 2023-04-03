import React from 'react'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { footer, sectionsLanding } from '../data/data';
import { capitalizedWord } from '../helpers/textUtils';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const sections = sectionsLanding

const Footer = () => {
    const length = sections.length
    const height = sections[length - 1].height
    return (
        <div className='footer_container' style={{
            height
        }}>
            <div className='footer_first-row'>
                <div className='footer_logo-section'>
                    <img width={180} className='_logo-height' src='assets/images/logo/dahu.png' alt='Dahu Hotels' />
                    <div>
                        <LocalPhoneIcon sx={{ fontSize: 20 }} /> 
                        +57 (123) 456-7890
                    </div>
                    <div>
                        <EmailIcon sx={{ fontSize: 20 }} /> 
                        <a href='mailto:contacto@dahulabs.com'>contacto@dahulabs.com</a>
                    </div>
                </div>
                <div className='footer_info-section'>
                    {
                        footer.map((list, i) => {
                            const { title, items } = list
                            return (
                                <div key={`${i}-${title}`}>
                                    <h4>{capitalizedWord(title)}</h4>
                                    <ul>
                                        {
                                            items.map((item, index) => {
                                                return (
                                                    <li key={index}>{capitalizedWord(item)}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <hr />
            <div className='footer_second-row'>
                <div className='footer_copyright'>
                    <CopyrightOutlinedIcon /> <span>DAHU HOTELS. Todos los derechos reservados.</span>
                </div>
                <div className='footer_social-media'>
                    <FacebookOutlinedIcon sx={{ cursor: 'pointer' }} />
                    <img className='_pointer' width={25} src='assets/images/social-media/instagram.png' alt='Instagram' />
                    <img className='_pointer' width={25} src='assets/images/social-media/linkedin.png' alt='LinkedIn' />
                </div>
            </div>
        </div>
    )
}

export default Footer