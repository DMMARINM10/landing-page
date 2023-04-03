import React, { useContext } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import { pricing, sectionsLanding } from '../data/data'
import { capitalizedWord, formatPrice } from '../helpers/textUtils';
import { ScreenContext } from '../App';

const sections = sectionsLanding
const cardsInfo = pricing
const ThirdSection = () => {
    const width = useContext(ScreenContext)
    const svgRatio = (width * 5) / 1536
    const paddingBottom = `calc(100% * 1 / ${svgRatio})`
    const height = sections[3].height
    const styleIcon = { color: '#ff153c' }

    return (
        <section id='precios' style={{
            height,
        }}>
            <div className='thirdSection_background-img' style={{
                paddingBottom,
                backgroundImage: `url('assets/images/backgroundImage/precios.svg')`,
            }}>
                <h1 className='thirdSection_title'>Precios</h1>
                <div className='thirdSection_card-container'>
                    {
                        cardsInfo.map((card, i) => {
                            const {
                                name,
                                price,
                                img,
                                benefits
                            } = card
                            const previousName = cardsInfo[i - 1]?.name
                            return (
                                <div key={`${name}-${i}`} className='thirdSection_card'>
                                    <div className='thirdSection_card-header'>
                                        <img src={`assets/images/pricing/${img}.png`} alt={`${name}-plan`} />
                                        <div className='thirdSection_card-header-container'>
                                            <div className='thirdSection_card-header-name'>
                                                <h3>{name.toUpperCase()}</h3>
                                            </div>
                                            <div>
                                                <h1>{formatPrice(price)}</h1>
                                                <p>per month</p>
                                            </div>
                                        </div>
                                    </div>
                                    <ul>
                                        {
                                            benefits.map((ben, index) => {
                                                return (
                                                    <li key={index}>
                                                        <CheckIcon sx={styleIcon}/>{ben}
                                                    </li>
                                                )
                                            })
                                        }
                                        {
                                            i !== 0 &&
                                            <li>
                                                <AddIcon sx={styleIcon} />
                                                {capitalizedWord(previousName)} plan
                                            </li>
                                        }
                                    </ul>
                                    <button className={i !== 1 ? 'button-secondary' : ''}>
                                        Suscribirse
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ThirdSection