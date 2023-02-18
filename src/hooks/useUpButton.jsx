import { useState } from "react";
import { sectionsLanding } from "../data/data";

const useUpButton = () => {
	const scroll = window.scrollY;
	const firstSection = sectionsLanding[1].height
	const [topSection, setTopSection] = useState(scroll < firstSection)
    window.addEventListener("scroll", (_) => {
		const scrollEvent = window.scrollY;
		if (scrollEvent < firstSection) {
			if (!topSection) setTopSection(true)
		} else {
			if (topSection) setTopSection(false)
		}
	})
	const upButton = !topSection
	return upButton
}

export default useUpButton