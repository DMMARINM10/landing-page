import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import { scrollTop } from '../helpers/scroll'
import useUpButton from '../hooks/useUpButton'

const UpButton = () => {
    const upButton = useUpButton()
    const height = window.innerHeight
    return (
        <div style={{
            backgroundColor: 'red',
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-end',
            position: 'sticky',
            top: '120px'
        }}>
{

        
            upButton && (
                
                <div className='upButton_icon' style={{
                    // bottom: -height + 150
                    right: '54px',
                    top: height - 150
                }} onClick={scrollTop}>
                <KeyboardArrowUpOutlinedIcon sx={{ fontSize: 50 }} />
                </div>
            )
        }
                    </div>
        
    )
}

export default UpButton