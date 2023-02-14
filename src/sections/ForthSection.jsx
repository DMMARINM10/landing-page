import React from 'react'
import PropTypes from 'prop-types'
import { sectionsLanding, team } from '../data/data'
import { capitalizedText, capitalizedWord } from '../helpers/textUtils'

const sections = sectionsLanding

const ForthSection = props => {
    const height = sections[4].height
    return (
        <section id='equipo' style={{
            height,
            // opacity: '0.5'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                // backgroundColor: 'pink',
                gap: '15%'
            }}>

                <h1 className='forthSection_title' style={{
                // fontSize: '34px' //TODO: 990
                }}>Equipo</h1>
                <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-evenly'
                }}>
                    {
                        team.map((person, index) => {
                            const {
                                img,
                                name,
                                position
                            } = person
                            return (
                                <div key={index} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // justifyContent: 'center',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginTop: index === 1 || index === 3 ? '70px' : ''
                                }}>
                                    <img className='forthSection_img' style={{
                                        // borderRadius: '100px',
                                        // width: '120px', //TODO: 860
                                        // height: '120px', //TODO: 860
                                        // width: '140px', //TODO: 1080
                                        // height: '140px', //TODO: 1080
                                        // width: '180px',
                                        // height: '180px'
                                    }} src={img} alt={`${name}-${position}`}/>
                                    <h2 className='forthSection_h2' style={{
                                        // fontSize: '18px', //TODO: 990
                                        // fontSize: '14px' //TODO: 860
                                    }}>{capitalizedText(name)}</h2>
                                    <p className='forthSection_p' style={{
                                        // fontSize: '16px',
                                        // color: 'gray',
                                        // fontSize: '12px' //TODO: 990
                                    }}>{capitalizedWord(position)}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

ForthSection.propTypes = {}

export default ForthSection