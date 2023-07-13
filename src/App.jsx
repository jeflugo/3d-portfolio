import { BrowserRouter } from 'react-router-dom'

import {
	About,
	Contact,
	Works,
	Tech,
	NavigateBtn,
	StarsCanvas,
	Hero,
	Navbar,
} from './components'

export default function App() {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Tech />
				<Works />
				<div className='relative z-0'>
					<Contact />
					{/* <StarsCanvas /> */}
				</div>
				<NavigateBtn />
			</div>
		</BrowserRouter>
	)
}