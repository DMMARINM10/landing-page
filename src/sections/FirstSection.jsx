import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const FirstSection = ({ sections }) => {
    const [width, setWidth] = useState(window.screen.width)
    window.addEventListener("resize", (_) => {
        const newWidth = window.screen.width
        if (window.screen.width !== width) {
            if (newWidth <= 782 && width !== 782) {
                setWidth(782)
                return
            }
            if (newWidth > 782) setWidth(newWidth)
        }

    })
    // useEffect(() => {
    //     window
    //       .matchMedia(`(max-width: ${max})`)
    //       .addEventListener('change', (e) => setScreen(e.matches))
    //   }, [])
    const height = sections[1]?.height
    const shapeHeight = height * 0.78
    //   const shape = `path("M 0 ${shapeHeight} Q ${width*0.086} ${shapeHeight*0.75} ${width*0.286} ${shapeHeight*0.875} Q ${width*0.57} ${shapeHeight} ${width*0.786} ${shapeHeight*0.375} Q ${width*0.857} ${shapeHeight*0.2} ${width} ${shapeHeight*0.2} L ${width} 0 L 0 0 z")`
    const shape = `path("M ${width} ${shapeHeight} Q ${width * 0.914} ${shapeHeight * 0.75} ${width * 0.714} ${shapeHeight * 0.875} Q ${width * 0.43} ${shapeHeight} ${width * 0.214} ${shapeHeight * 0.375} Q ${width * 0.143} ${shapeHeight * 0.2} 0 ${shapeHeight * 0.2} L 0 0 L ${width} 0 z")`
    //   const polygon =  'polygon(0% 0%, 100% 0%, 100% 550px, 0% 100%)'
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
            <div style={{
                width: '100%',
                height: shapeHeight,
            }}>
                <div className='firstSection_inside-shape'>
                    <div className='firstSection_text-container' style={{
                        color: '#282c38'
                    }}>
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

FirstSection.propTypes = {}

export default FirstSection