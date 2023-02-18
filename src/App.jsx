import Header from './sections/Header';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import Footer from './sections/Footer';
import ThirdSection from './sections/ThirdSection';
import ForthSection from './sections/ForthSection';
import FifthSection from './sections/FifthSection';
import useWidth from './hooks/useWidth';
import { createContext } from 'react';
import UpButton from './components/UpButton';
export const ScreenContext = createContext(null);

const App = () => {
	const width = useWidth()
	return (
		<ScreenContext.Provider value={width}>
			<div id='container'>
				<Header />
				<UpButton />
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
