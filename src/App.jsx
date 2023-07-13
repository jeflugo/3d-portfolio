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
import { useState } from 'react'

export default function App() {
	const [active, setActive] = useState('')
	const [toggle, setToggle] = useState(false)
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<Navbar
						active={active}
						setActive={setActive}
						toggle={toggle}
						setToggle={setToggle}
					/>
					<Hero />
				</div>
				<About />
				<Tech />
				<Works />
				<div className='relative z-0'>
					<Contact />
					<StarsCanvas />
				</div>
				<NavigateBtn setActive={setActive} />
			</div>
		</BrowserRouter>
	)
}
