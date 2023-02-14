import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import { pricing, sectionsLanding } from '../data/data'
import { capitalizedWord } from '../helpers/textUtils';
import { ScreenContext } from '../App';

const sections = sectionsLanding
const cardsInfo = pricing
const ThirdSection = props => {
    const width = useContext(ScreenContext)
    const svgRatio = (width * 5) / 1536
    const height = sections[3].height
    const borderCard = '15px'
    return (
        <section id='precios' style={{
            height,
        }}>
            <div className='thirdSection_for' style={{
                width: '100%',
                backgroundSize: 'contain',
                padding: '0',
                paddingBottom: `calc(100% * 1 / ${svgRatio})`,
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url('assets/images/backgroundImage/precios.svg')`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}>
                <h1 className='thirdSection_title' style={{
                    // marginTop: '200px',
                    // color: 'white',
                    // fontSize: '34px' // TODO: 990
                }}>Precios</h1>
                <div style={{
                    width: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
            zIndex: 0
                }}>
                    {
                        cardsInfo.map((card, i) => {
                            const {
                                name,
                                price,
                                img,
                                benefits
                            } = card
                            const previousName = cardsInfo[i - 1]?.name
                            const shadow = -8 + (i*8)
                            const borderRadius = i === 0
                                ? `${borderCard} 0 0 ${borderCard}`
                                : i === 1
                                    ? borderCard
                                    : `0 ${borderCard} ${borderCard} 0`
                            return (
                                <div key={i} className='thirdSection_test' style={{
                                    width: i !== 1 ? '25%' :'28%',
                                    // backgroundColor: 'white',
                                    height: i === 1 ? '550px' : '480px',
                                    // color: 'gray',
                                    // display: 'flex',
                                    // flexDirection: 'column',
                                    // justifyContent: 'space-evenly',
                                    // // justifyContent: 'center', //TODO: 1354
                                    // // gap: '5%', //TODO: 1354
                                    // alignItems: 'center',
                                    borderRadius,
                                    // position: 'relative',
                                    zIndex: i === 1 ? '1' : '0',
                                    boxShadow: `${shadow}px 0px 10px 8px rgba(0, 0, 0, 0.15)`,
                                    // padding: '0 10px'
                                }}>
                                    <div className='thirdSection_test-1' style={{
                                        // display: 'flex',
                                        // justifyContent: 'space-between',
                                        // // justifyContent: 'center', //TODO: 1176
                                        // width: '70%',
                                        // height: '35%'
                                    }}>
                                        <img className='thirdSection_test-2' style={{
                                            marginRight: i !== 0 ? '-90%' : '',
                                            marginLeft: i === 0 ? '-20%' : '-15%',
                                            // width: '70%', //1354 TODO:
                                            // height: '70%', //1354 TODO:
                                            // display: 'none',//1176 TODO:
                                            // width: '90%',
                                            // height: '90%'
                                            // width='250px' height={200}
                                        }}  src={`assets/images/pricing/${img}.png`} alt={`${name}-plan`} />
                                        <div className='thirdSection_test-3' style={{
                                            // fontWeight: 'bold',
                                            // display: 'flex',
                                            // flexDirection: 'column',
                                            // justifyContent: 'space-around',
                                            // alignItems: 'center', // 1176 TODO:
                                            // height: '80%' //1354 TODO:
                                        }}>
                                            <div style={{
                                                borderBottom: `3px solid ${i === 1 ? 'red' : 'gray'}`,
                                                color: i === 1 ? 'red' : 'gray',
                                                width: 'fit-content',
                                                padding: '10px 0'
                                            }}>
                                                <h3 style={{
                                                }}>{name.toUpperCase()}</h3>
                                            </div>
                                            <div>
                                                <h1 className='thirdSection_test-4' style={{
                                                    // color: 'black',
                                                    // fontSize: i !== 1 ? '32px' : ''
                                                    // fontSize: i !== 1 ? '28px' : '34px' //1354 TODO:
                                                }}>${price}</h1>
                                                <p style={{
                                                    fontSize: '14px'
                                                }}>per month</p>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='thirdSection_test-5' style={{
                                        // fontWeight: 'bold',
                                        // display: 'flex',
                                        // flexDirection: 'column',
                                        // gap: '20px',
                                        // fontSize: '14px' //TODO: 1176
                                    }}>
                                        {
                                            benefits.map((ben, index) => {
                                                return (
                                                    <li key={index} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}><CheckIcon sx={{ color: 'red' }} />{ben}</li>
                                                )
                                            })
                                        }
                                        {
                                            i !== 0 &&
                                            <li style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                            }}><AddIcon sx={{ color: 'red' }} />{capitalizedWord(previousName)} plan</li>
                                        }
                                    </ul>
                                    <button className={i !== 1 ? 'button-secondary thirdSection_test-6' : 'thirdSection_test-6'} style={{
                                        // fontSize: '16px' //TODO: 1176
                                    }}>Suscribirse</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

ThirdSection.propTypes = {}

export default ThirdSection