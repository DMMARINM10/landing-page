const useCurrentSection = (sections, currentSection, setCurrentSection) => {
    window.addEventListener("scroll", (_) => {
		const scroll = window.scrollY;
		const firstSection = sections[1].height - 10
		const secondSection = firstSection + sections[2].height
		if (scroll < firstSection) {
			if (currentSection !== sections[1].name) setCurrentSection(sections[1].name)
		} else if (scroll >= firstSection && scroll < secondSection) {
			if (currentSection !== sections[2].name) setCurrentSection(sections[2].name)
		}
	})
}

export default useCurrentSection