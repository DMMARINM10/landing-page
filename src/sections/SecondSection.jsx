import React from 'react'
import { capitalizedWord } from '../helpers/textUtils'
import { advantages, sectionsLanding } from '../data/data'
import { useContext } from 'react'
import { ScreenContext } from '../App'

const sections = sectionsLanding

const SecondSection = () => {
    const width = useContext(ScreenContext)
    const svgRatio = (width * 2.8) / 1536
    const heightFunc = sections[2].height
    const paddingBottom = `calc(100% * 1 / ${svgRatio})`
    const marginTop = `calc(100% * 1 / ${svgRatio*0.5})`

    return (
        <section id="funcionalidades" className='secondSection_container' style={{
            height: heightFunc
        }}>
            {/* First Row */}
            <div className='secondSection_first-row' style={{
                height: heightFunc / 3,
            }}>
                <div className='secondSection_title-container'>
                    <h2>Nuestro sistema ofrece una serie de ventajas que le ayudarán a gestionar su hotel con mayor eficacia</h2>
                </div>
                <div className='secondSection_items-container'>
                    {
                        advantages.map((adv, i) => {
                            const {
                                name,
                                img,
                                description: desc
                            } = adv
                            return (
                                <div key={name} className='secondSection_items'>
                                    <div className='secondSection_item-img'>
                                        <img src={`assets/images/features/${img}.png`} alt={`Feature ${i + 1}`} />
                                    </div>
                                    <div className='secondSection_item-text'>
                                        <h4>{capitalizedWord(name)}</h4>
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
                height: (2 * heightFunc) / 3,
            }}>
                <div className='secondSection_title-container secondSection_title-container-2'>
                    <h2>Nuestro sistema de gestión hotelera incluye una serie de potentes funciones que le ayudarán a agilizar y optimizar sus operaciones</h2>
                </div>
                <div className='secondSection_feature-container'>
                    <div className='secondSection_background-img' style={{
                        paddingBottom,
                        backgroundImage: `url('assets/images/backgroundImage/funcionalidades-1.svg')`,
                    }}>
                        <img style={{
                            marginTop
                        }} className='secondSection_first-img' src='assets/images/sections/mockup-1.png' alt='Image' />
                    </div>
                    <div className='secondSection_feature-column'>
                        <h2>Sunt esse laboris voluptate ex quis do.</h2>
                        <p>Consectetur veniam exercitation occaecat ipsum nisi qui minim est occaecat amet qui duis qui. Laborum minim commodo ex anim laborum laborum sit.</p>
                        <div>
                            <button>Hola</button>
                            <button className='button-secondary'>hola</button>
                        </div>
                    </div>
                </div>
                <div className='secondSection_feature-container'>
                    <div className='secondSection_feature-column'>
                        <h2>Sunt esse laboris voluptate ex quis do.</h2>
                        <p>Consectetur veniam exercitation occaecat ipsum nisi qui minim est occaecat amet qui duis qui. Laborum minim commodo ex anim laborum laborum sit.</p>
                        <div>
                            <button>Hola</button>
                            <button className='button-secondary'>hola</button>
                        </div>
                    </div>
                    <div className='secondSection_background-img secondSection_background-img-2' style={{
                        paddingBottom,
                        backgroundImage: `url('assets/images/backgroundImage/funcionalidades-2.svg')`,
                    }}>
                        <img style={{
                            marginTop
                        }} className='secondSection_second-img' src='assets/images/sections/charts.png' alt='charts' />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default SecondSection