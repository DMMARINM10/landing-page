const useWidth = (width, setWidth) => {
    window.addEventListener("resize", (_) => {
        const newWidth = window.innerWidth
        if (newWidth !== width) {
            if (newWidth <= 750 && width !== 750) {
                setWidth(750)
                return
            }
            if (newWidth > 750) setWidth(newWidth)
        }

    })
}

export default useWidth