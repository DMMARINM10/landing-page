import React from 'react'
import PropTypes from 'prop-types'
import { capitalizedWord } from '../helpers/textUtils'

const Dropdown = ({ currentSection, sections }) => {
    const length = sections.length
    const height = (length - 3)*40 + 92
  return (
    <div className='header_menu-logo' style={{
        // backgroundColor: 'yellow',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: -height,
        zIndex: 1
        // transitionDelay: '0s, 0s, 0.3s'
    }}>
        <ul style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F3F0F5',
            width: '80%',
            padding: '30px',
            border: '1px solid gray'
            // boxShadow: '5px 5px 5px 0px rgba(0, 0, 0, 0.5), -5px 0px 5px 0px rgba(0, 0, 0, 0.5)',
            // boxShadow: '-5px 0px 5px 0px rgba(0, 0, 0, 0.5)',
        }}>

        {
            sections.map((sec, i) => {
                const name = sec.name
                const selectedSection = currentSection === name
                if(i === 0 || i === length - 1) return
                return (
                    <li key={i} style={{
                        height: i === length - 2 ? '30px' : '40px',
                        fontSize: '20px',
                        // backgroundColor: 'blue',
                        overflow: 'hidden',
                    }}>
                        <div style={{
                            cursor: 'pointer',
                            width: 'fit-content',
                            borderBottom: `3px solid ${selectedSection ? '#ff153c' : 'transparent'}`,
                            color: `${selectedSection ? '#ff153c' : 'gray'}`,
                            fontWeight: `${selectedSection ? 'bold' : 'lighter'}`
                            // backgroundColor: 'yellow'
                        }}>
                            {capitalizedWord(name)}
                        </div>
                    </li>
                    )
                })
            }
            </ul>
    </div>
  )
}

Dropdown.propTypes = {}

export default Dropdown