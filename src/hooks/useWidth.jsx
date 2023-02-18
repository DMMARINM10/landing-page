import { useState } from "react"

const useWidth = () => {
    const initialWidth = window.innerWidth < 620
        ? 620
        : window.innerWidth > 2000
            ? 2000
            : window.innerWidth
    const [width, setWidth] = useState(initialWidth)
    window.addEventListener("resize", () => {
        const newWidth = window.innerWidth
        if (newWidth !== width) {
            if (newWidth <= 620 && width !== 620) {
                setWidth(620)
            } else if (newWidth > 620 && newWidth < 2000) {
                setWidth(newWidth)
            } else if (newWidth >= 2000 && width !== 2000) {
                setWidth(2000)
            }

        }

    })
    return width
}

export default useWidth