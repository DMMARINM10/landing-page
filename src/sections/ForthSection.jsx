import React from 'react'
import { sectionsLanding, team } from '../data/data'
import { capitalizedText, capitalizedWord } from '../helpers/textUtils'

const sections = sectionsLanding

const ForthSection = () => {
    const height = sections[4].height
    return (
        <section id='equipo' style={{
            height
        }}>
            <div className='forthSection_container'>
                <h1 className='forthSection_title'>Equipo</h1>
                <div className='forthSection_team-container'>
                    {
                        team.map((person, index) => {
                            const {
                                img,
                                name,
                                position
                            } = person
                            return (
                                <div key={`${name}-${index}`}>
                                    <img src={img} alt={`${name}-${position}`} />
                                    <h2>{capitalizedText(name)}</h2>
                                    <p>{capitalizedWord(position)}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ForthSection