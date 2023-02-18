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
                <div style={{
                    // marginTop: '-20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',

                }}>
                    <img width={180} className='_logo-height' src='assets/images/logo/dahu.png' alt='Dahu Hotels' />
                    <div style={{
                        // textAlign: 'center'
                        display: 'flex',
                        gap: '8px',
                        // backgroundColor: 'blue',
                        // textAlign: 'center'
                    }}><LocalPhoneIcon sx={{ fontSize: 20 }}/> +57 (123) 456-7890</div>
                    <div style={{
                        // textAlign: 'center'
                        display: 'flex',
                        gap: '8px',
                        // backgroundColor: 'blue',
                        // textAlign: 'center'
                    }}><EmailIcon sx={{ fontSize: 20 }}/> <a style={{
                        textDecoration: 'none',
                        color: 'white'
                    }} href='mailto:contacto@dahulabs.com'>contacto@dahulabs.com</a></div>
                </div>
                <div style={{
                    display: 'flex',
                    // backgroundColor: 'yellow',
                    // opacity: '0.5',
                    textAlign: 'center',
                    gap: '5%' //TODO:
                }}>
                    {
                        footer.map((list, i) => {
                            const { title, items } = list
                            return (
                                <div key={`${i}-${title}`} className='footer_list'>
                                    <h4 style={{
                                        color: 'white'
                                    }}>{capitalizedWord(title)}</h4>
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
                {/* <div className='footer_list footer_subscribe'>
                    <h4>Suscríbete</h4>
                    <div className='footer_subscribe-text'>Ingresa tu email para estar al día con lo que DAHU HOTELS tiene para ti.</div>
                </div>
                <div className='footer_input-container'>
                    <input className='footer_input'
                        type='email'
                        placeholder='Ingresa tu email'
                    />
                    <button>Enviar</button>
                </div> */}
            </div>
            <hr className='footer_hr' />
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