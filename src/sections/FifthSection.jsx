import React, { useContext } from 'react'
import { integrations, sectionsLanding } from '../data/data'
import { ScreenContext } from '../App'

const sections = sectionsLanding

const FifthSection = () => {
    const width = useContext(ScreenContext)
    const svgRatio = (width * 1.7) / 1536
    const height = sections[5].height
    const lengthIntegrations = integrations.length
    const integrationHalf = lengthIntegrations % 2 === 0 
        ? lengthIntegrations / 2
        : Math.floor(lengthIntegrations / 2)
    const firstIntegrations = integrations.slice(0, integrationHalf)
    const secondIntegrations = integrations.slice(integrationHalf, lengthIntegrations)
    return (
            <section style={{
                height
            }}>
                <div className='fifthSection_container' style={{
                    paddingBottom: `calc(100% * 1 / ${svgRatio})`,
                    backgroundImage: `url('assets/images/backgroundImage/integraciones.svg')`,
                }}>
                    <h1 id='integraciones'>Integraciones</h1>
                    <div className='fifthSection_first-row'>
                        {
                            firstIntegrations.map((int, index) => {
                                const { name, logo } = int
                                return (
                                    <img key={index} src={logo} alt={name} />
                                )
                            })
                        }
                    </div>
                    <div className='fifthSection_second-row'>
                        {
                            secondIntegrations.map((int, index) => {
                                const { name, logo } = int
                                return (
                                    <img key={index} src={logo} alt={name} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
    )
}

export default FifthSection