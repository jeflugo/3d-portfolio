import { motion } from 'framer-motion'

import { styles } from '../styles'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { textVariant } from '../utils/motion'
import { useEffect, useState } from 'react'

function Tech() {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width:500px)')

		setIsMobile(mediaQuery.matches)

		const handleMediaQueryChange = event => {
			setIsMobile(event.matches)
		}

		mediaQuery.addEventListener('change', handleMediaQueryChange)

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange)
		}
	}, [])

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My knowledge so far</p>
				<h2 className={styles.sectionHeadText}>Skills.</h2>
			</motion.div>
			<div className='mt-14 flex flex-row flex-wrap justify-center gap-10'>
				{technologies.map(technology => (
					<div
						className='w-28 h-28 cursor-pointer flex flex-col items-center'
						key={technology.name}
						title={technology.name}
					>
						{isMobile ? (
							<>
								<img src={technology.icon} alt={technology.name} />
								<h3>{technology.name}</h3>
							</>
						) : (
							<BallCanvas icon={technology.icon} />
						)}
					</div>
				))}
			</div>
		</>
	)
}

export default SectionWrapper(Tech, 'tech')
