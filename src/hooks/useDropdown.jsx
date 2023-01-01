const useDropdown = (dropdown, setDropdown) => {
    window.addEventListener("resize", (_) => {
        const width = window.screen.width
        if (width > 840 && dropdown) {
            setDropdown(false)
        }
    })
}

export default useDropdown