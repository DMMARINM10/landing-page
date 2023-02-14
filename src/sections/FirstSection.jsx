import React, { useState } from 'react'
import { useContext } from 'react'
import { ScreenContext } from '../App'
import { sectionsLanding } from '../data/data'

const sections = sectionsLanding

const FirstSection = () => {
    const width = useContext(ScreenContext)
    const svgRatio = (width * 2.2) / 1536
    const height = sections[1]?.height
    return (
        <section id="inicio" style={{
            height,
        }}>
            <div className='firstSection_shape' style={{
                paddingBottom: `calc(100% * 1 / ${svgRatio})`,
                backgroundImage: `url('assets/images/backgroundImage/inicio.svg')`
            }}>
                <div className='firstSection_inside-shape'>
                    <div className='firstSection_text-container'>
                        <h1 style={{
                            alignSelf: 'flex-start'
                        }}>El nuevo software para gestionar tus hoteles, <span className='firstSection_name-style'>DAHU Hotels</span></h1>
                        <p>Bienvenido a nuestro sistema de gestión hotelera, nuestro software basado en la nube la solución definitiva para agilizar y optimizar las operaciones de su hotel.</p>
                        <button style={{
                            marginTop: '25px'
                        }}>Regístrate ahora</button>
                    </div>
                    <img className='firstSection_img' src='assets/images/sections/image.png' alt='Inicio' />
                </div>
            </div>
        </section>
    )
}

export default FirstSection //proptypes