import React from 'react'
import PropTypes from 'prop-types'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = ({ sections }) => {
    const length = sections.length
    const height = sections[length - 1].height
    return (
        <div style={{
            height,
            // backgroundColor: '#282c38',
            backgroundColor: '#B2BBC9',
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            alignItems: 'center',
            marginTop: '30px'
            // overflow: 'hidden'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0px 40px',
                height: '70%',
                width: '100%',
                // backgroundColor: 'yellow'
            }}>
                <img className='_logo-height' src='assets/images/logo/dahu.png' alt='Dahu Hotels' />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '55%',
                    // justifyContent: 'space-evenly'
                }}>
                    <h4 style={{
                        marginBottom: '10px'
                    }}>
                        Productos
                    </h4>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontSize: '14px'
                    }}>
                        <li style={{
                            cursor: 'pointer',
                            color: 'white'
                        }}>Clientes</li>
                        <li style={{
                            cursor: 'pointer',
                            color: 'white'
                        }}>Documentos</li>
                    </ul>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '55%',
                    // backgroundColor: 'yellow'
                }}>
                    <h4 style={{
                        marginBottom: '10px'
                    }}>
                        Compañía
                    </h4>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontSize: '14px'
                    }}>
                        <li style={{
                            cursor: 'pointer',
                            color: 'white' //hover white
                        }}>Nosotros</li>
                        <li style={{
                            cursor: 'pointer',
                            color: 'white'
                        }}>Contáctanos</li>
                        <li style={{
                            cursor: 'pointer',
                            color: 'white'
                        }}>Términos</li>
                    </ul>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '55%', //hide TODO:
                    width: '20%',
                    // backgroundColor: 'yellow'
                }}>
                    <h4 style={{
                        marginBottom: '10px'
                    }}>
                        Suscríbete
                    </h4>
                    <div style={{
                        fontSize: '14px',
                        textAlign: 'center',
                        // display: 'none' //TODO:
                    }}>Ingresa tu email para estar al día con lo que DAHU HOTELS tiene para ti.</div>
                </div>
                <div style={{
                    backgroundColor: 'white',
                    height: 'fit-content',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    // width: '250px'
                    // paddingLeft: '15px',
                }}>

                    <input style={{
                        border: 'none',
                        outline: 'none',
                        margin: '0px 8px',
                        width: '300px'
                        // width: '100%' //1024 TODO:
                    }}
                        type='email'
                        placeholder='Ingresa tu email'
                    />
                    <button style={{
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>Enviar</button>
                </div>
            </div>
            <hr style={{
                height: '1px',
                marginBottom: '0px',
                padding: '0px',
                backgroundColor: 'white'
            }} />
            <div style={{
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: '25%',
                padding: '0px 5%',
                // backgroundColor: 'green'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '350px',
                    // backgroundColor: 'blue'
                }}>

                    <CopyrightOutlinedIcon /> <span>DAHU HOTELS. Todos los derechos reservados.</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100px',
                    // backgroundColor: 'blue'
                }}>

                    <FacebookOutlinedIcon sx={{ cursor: 'pointer' }} />
                    <img style={{
                        cursor: 'pointer'
                    }} width={25} src='assets/images/social-media/instagram.png' alt='Instagram' />
                    <img style={{
                        cursor: 'pointer'
                    }} width={25} src='assets/images/social-media/linkedin.png' alt='LinkedIn' />
                </div>
            </div>
        </div>
    )
}

Footer.propTypes = {}

export default Footer