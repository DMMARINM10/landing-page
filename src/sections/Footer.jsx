import React from 'react'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { sectionsLanding } from '../data/data';

const sections = sectionsLanding

const Footer = () => {
    const length = sections.length
    const height = sections[length - 1].height
    return (
        <div className='footer_container' style={{
            height
        }}>
            <div className='footer_first-row'>
                <img className='_logo-height' src='assets/images/logo/dahu.png' alt='Dahu Hotels' />
                <div className='footer_list'>
                    <h4>Productos</h4>
                    <ul>
                        <li>Clientes</li>
                        <li>Documentos</li>
                    </ul>
                </div>
                <div className='footer_list'>
                    <h4>Compañía</h4>
                    <ul>
                        <li>Nosotros</li>
                        <li>Contáctanos</li>
                        <li>Términos</li>
                    </ul>
                </div>
                <div className='footer_list footer_subscribe'>
                    <h4>Suscríbete</h4>
                    <div className='footer_subscribe-text'>Ingresa tu email para estar al día con lo que DAHU HOTELS tiene para ti.</div>
                </div>
                <div className='footer_input-container'>
                    <input className='footer_input'
                        type='email'
                        placeholder='Ingresa tu email'
                    />
                    <button>Enviar</button>
                </div>
            </div>
            <hr className='footer_hr'/>
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