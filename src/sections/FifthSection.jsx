import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { integrations, sectionsLanding } from '../data/data'
import { ScreenContext } from '../App'

const sections = sectionsLanding

const FifthSection = props => {
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
                height,
                // backgroundColor: 'yellow'
                // overflow: 'hidden'
            }}>
                <div style={{
                    //contain, height 0, 1/1.5
                    width: '100%',
                    backgroundSize: 'contain',
                    padding: '0',
                    height: '100%',
                    // paddingBottom: 'calc(100% * 1 / 1.5)',
                    paddingBottom: `calc(100% * 1 / ${svgRatio})`,
                    // overflow: 'hidden',
                    // backgroundPositionY: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    marginTop: '-150px',
                    // marginBo
                    backgroundImage: `url('assets/images/backgroundImage/integraciones.svg')`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    // backgroundPositionY: 'top',
                    // backgroundColor: 'blue',
                    // backgroundColor: 'yellow',
                    gap: '120px'
                }}>
                    {/* <div style={{
                        // height: '200px',
                        // width: '100px',
                        // position: 'absolute',
                        backgroundColor: 'red'
                    }}></div> */}
                    <h1 id='integraciones' style={{
                    marginTop: '160px',
                    paddingTop: '20px'
                    }}>Integraciones</h1>
                    <div className='primer-gap' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        // height: 'fit-content',
                        // gap: '12%'
                        // marginLeft: '-20%'
                    }}>
                        {
                            firstIntegrations.map((int, index) => {
                                const { name, logo } = int
                                return (
                                    <img className='fifthSection_img-1' style={{
                                        borderRadius: '100px',
                                        boxShadow: '0px 0px 10px 8px rgba(0, 0, 0, 0.15)',
                                        // marginRight: '45%',
                                        marginTop: index === 1 ? '100px' : '',
                                        backgroundColor: 'white',
                                        // width: 160,
                                        // height: 160,
                                    }} key={index} src={logo} alt={name} />
                                )
                            })
                        }
                    </div>
                    <div className='segundo-gap' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        // gap: '17%'
                        // marginLeft: '-45%'
                    }}>
                        {
                            secondIntegrations.map((int, index) => {
                                const { name, logo } = int
                                return (
                                    <img className='fifthSection_img-2' style={{
                                        borderRadius: '100px',
                                        boxShadow: '0px 0px 10px 8px rgba(0, 0, 0, 0.15)',
                                        // marginRight: '45%',
                                        marginTop: index === 1 || index === 2 ? '-80px' : '',
                                        backgroundColor: 'white'
                                    }} key={index} src={logo} alt={name} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
    )
}

FifthSection.propTypes = {}

export default FifthSection