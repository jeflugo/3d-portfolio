import { motion } from 'framer-motion'

import { styles } from '../styles'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { textVariant } from '../utils/motion'

function Tech() {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My knowledge so far</p>
				<h2 className={styles.sectionHeadText}>Skills.</h2>
			</motion.div>
			<div className='mt-14 flex flex-row flex-wrap justify-center gap-10'>
				{technologies.map(technology => (
					<div
						className='w-28 h-28 cursor-pointer'
						key={technology.name}
						title={technology.name}
					>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</>
	)
}

export default SectionWrapper(Tech, 'tech')
