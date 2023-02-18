import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import { scrollTop } from '../helpers/scroll'
import useUpButton from '../hooks/useUpButton'

const UpButton = () => {
    const upButton = useUpButton()
    const height = window.innerHeight
    return (
        <div className='upButton_container'>
            {
                upButton && (
                    <div style={{
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