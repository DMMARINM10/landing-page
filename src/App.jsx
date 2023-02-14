import Header from './sections/Header';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import Footer from './sections/Footer';
import ThirdSection from './sections/ThirdSection';
import ForthSection from './sections/ForthSection';
import FifthSection from './sections/FifthSection';
import useWidth from './hooks/useWidth';
import { createContext } from 'react';
export const ScreenContext = createContext(null);

const App = () => {
	const width = useWidth()
	return (
		<ScreenContext.Provider value={width}>
			<div>
				<Header />
				<FirstSection />
				<SecondSection />
				<ThirdSection />
				<ForthSection />
				<FifthSection />
				<Footer />
			</div >
		</ScreenContext.Provider>
	)
}

export default App
