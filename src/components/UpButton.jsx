import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import { scrollTop } from '../helpers/scroll'

const UpButton = () => {
    const height = window.innerHeight
    return (
        <div className='upButton_icon' style={{
            bottom: -height + 150
        }} onClick={scrollTop}>
            <KeyboardArrowUpOutlinedIcon sx={{ fontSize: 50 }} />
        </div>
    )
}

export default UpButton