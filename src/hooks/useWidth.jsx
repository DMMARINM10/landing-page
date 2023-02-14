import { useState } from "react"

const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener("resize", () => {
        const newWidth = window.innerWidth
        if (newWidth !== width) {
            if (newWidth <= 620 && width !== 620) {
                setWidth(620)
            } else if (newWidth > 620) {
                setWidth(newWidth)
            } 
            
        }

    })
    return width
}

export default useWidth