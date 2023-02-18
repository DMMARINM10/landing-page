export const dropdown = (dropdown, setDropdown) => {
    window.addEventListener("resize", (_) => {
        const width = window.innerWidth
        if (width > 840 && dropdown) {
            setDropdown(false)
        }
    })
}