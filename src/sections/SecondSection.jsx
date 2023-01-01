import React from 'react'
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined'
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp'
import { capitalizedWord } from '../helpers/textUtils'
import { advantages, sectionsLanding } from '../data/data'

const sections = sectionsLanding

const SecondSection = () => {
    const heightFunc = sections[2].height
    return (
        <section id="funcionalidades" className='secondSection_container' style={{
            height: heightFunc
        }}>
            {/* First Row */}
            <div className='secondSection_first-row' style={{
                height: heightFunc / 3
            }}>
                <div className='secondSection_title-container'>
                    <h2>Nuestro sistema ofrece una serie de ventajas que le ayudarán a gestionar su hotel con mayor eficacia</h2>
                </div>
                <div className='secondSection_items-container'>
                    {
                        advantages.map((adv, _) => {
                            const name = adv.name
                            const img = adv.img
                            const desc = adv.description
                            return (
                                <div key={name} className='secondSection_items'>
                                    <img src={`assets/images/features/${img}.png`} alt='' />
                                    <div className='secondSection_item-text'>
                                        <h4>{capitalizedWord(name)}</h4>
                                        <div className='secondSection_item-separator'></div>
                                        <p>{capitalizedWord(desc)}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* Second Row */}
            <div className='secondSection_second-row' style={{
                height: (2 * heightFunc) / 3
            }}>
                <div className='secondSection_title-container-2'>
                    <h2>Nuestro sistema de gestión hotelera incluye una serie de potentes funciones que le ayudarán a agilizar y optimizar sus operaciones</h2>
                </div>
                <hr />
                <div className='secondSection_feature-container'>
                    <div className='secondSection_feature-column'>
                        <div className='secondSection_feature'>
                            <HotelOutlinedIcon sx={{ fontSize: 50, color: 'rgb(220, 68, 97)' }} />
                            <div className='secondSection_separation'></div>
                            <div>
                                <h2>Recepción</h2>
                                <p>Agilice las entradas y salidas, gestione los perfiles y solicitudes de los huéspedes y la asignación de habitaciones.</p>
                            </div>
                        </div>
                        <div className='secondSection_feature'>
                            <CleanHandsOutlinedIcon sx={{ fontSize: 50, color: 'rgb(63, 141, 146)' }} />
                            <div className='secondSection_separation'></div>
                            <div>
                                <h2>Limpieza</h2>
                                <p>Controle el estado de las habitaciones y comuníquese con el personal de limpieza a través del sistema.</p>
                            </div>
                        </div>
                        <div className='secondSection_feature'>
                            <HandymanOutlinedIcon sx={{ fontSize: 50, color: 'rgb(245, 192, 73)' }} />
                            <div className='secondSection_separation'></div>
                            <div>
                                <h2>Mantenimiento</h2>
                                <p>Gestione las solicitudes de mantenimiento y programe las tareas respectivas.</p>
                            </div>
                        </div>
                    </div>
                    <img className='secondSection_first-img' src='assets/images/sections/mockup-1.png' alt='' />
                </div>
                <div className='secondSection_feature-container'>
                    <img className='secondSection_second-img' src='assets/images/sections/mockup3.png' alt='' />
                    <div className='secondSection_feature-column'>
                        <div className='secondSection_feature'>
                            <CurrencyExchangeOutlinedIcon sx={{ fontSize: 50, color: 'rgb(185, 41, 222)' }} />
                            <div className='secondSection_separation'></div>
                            <div>
                                <h2>Reservas</h2>
                                <p>Gestione las reservas de habitaciones, los planes de tarifas y la disponibilidad en tiempo real.</p>
                            </div>
                        </div>
                        <div className='secondSection_feature'>
                            <InsertChartOutlinedSharpIcon sx={{ fontSize: 50, color: 'rgb(39, 93, 172)' }} />
                            <div className='secondSection_separation'></div>
                            <div>
                                <h2>Informes</h2>
                                <p>Genere informes sobre indicadores clave de rendimiento, como índices de ocupación, ingresos y nivel satisfacción del cliente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SecondSection