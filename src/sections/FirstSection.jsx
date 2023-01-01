import React, { useState } from 'react'
import { sectionsLanding } from '../data/data'
import useWidth from '../hooks/useWidth'

const sections = sectionsLanding

const FirstSection = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useWidth(width, setWidth)
    const height = sections[1]?.height
    const shapeHeight = height * 0.78
    const shape = `path("M ${width} ${shapeHeight} Q ${width * 0.914} ${shapeHeight * 0.75} ${width * 0.714} ${shapeHeight * 0.875} Q ${width * 0.43} ${shapeHeight} ${width * 0.214} ${shapeHeight * 0.375} Q ${width * 0.143} ${shapeHeight * 0.2} 0 ${shapeHeight * 0.2} L 0 0 L ${width} 0 z")`
    const whiteHeight = height - shapeHeight
    return (
        <section id="inicio">
            <div className='firstSection_shape' style={{
                height: shapeHeight,
                clipPath: shape,
                marginBottom: -shapeHeight
            }}>
                <div className='firstSection_inside-shape'>
                    <div className='firstSection_text-container'>
                        <h1>El nuevo software para gestionar tus hoteles, <span className='firstSection_name-style'>DAHU Hotels</span></h1>
                        <p>Bienvenido a nuestro sistema de gestión hotelera, la solución definitiva para agilizar y optimizar las operaciones de su hotel. Nuestro software basado en la nube está diseñado para ayudar a los hoteleros a gestionar todos los aspectos de su negocio, desde las reservas y las operaciones de recepción hasta la limpieza y el mantenimiento. Con nuestro sistema, puede aumentar la eficiencia, reducir costes y ofrecer una mejor experiencia a sus huéspedes.</p>
                        <button>Regístrate ahora</button>
                    </div>
                    <img className='firstSection_img' src='assets/images/sections/image.png' alt='Inicio' />
                </div>
            </div>
            <div className='firstSection_content-behind' style={{
                height: shapeHeight
            }}>
                <div className='firstSection_inside-shape'>
                    <div className='firstSection_text-container firstSection_color-behind'>
                        <h1>El nuevo software para gestionar tus hoteles, <span className='firstSection_name-style-behind'>DAHU Hotels</span></h1>
                        <p>Bienvenido a nuestro sistema de gestión hotelera, la solución definitiva para agilizar y optimizar las operaciones de su hotel. Nuestro software basado en la nube está diseñado para ayudar a los hoteleros a gestionar todos los aspectos de su negocio, desde las reservas y las operaciones de recepción hasta la limpieza y el mantenimiento. Con nuestro sistema, puede aumentar la eficiencia, reducir costes y ofrecer una mejor experiencia a sus huéspedes.</p>
                        <button>Regístrate ahora</button>
                    </div>
                    <img className='firstSection_img' src='assets/images/sections/image.png' alt='Inicio' />
                </div>
            </div>
            <div className='firstSection_companies' style={{
                height: whiteHeight
            }}>
                <img className='_logo-height' src='assets/images/companies/aws.png' alt='AWS' />
                <img className='_logo-height' src='assets/images/companies/dahu-labs.png' alt='Dahu Labs' />
                <img className='_logo-height' src='assets/images/companies/Mar-Inn.png' alt='Mar Inn Hotel' />
            </div>
        </section>
    )
}

export default FirstSection