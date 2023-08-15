import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, site } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

function ProjectCard({
	index,
	name,
	description,
	tags,
	image,
	page_link,
	source_code_link,
}) {
	return (
		<Tilt>
			<motion.div variants={fadeIn('up', 'spring', 0.5 * index, 0.75)}>
				<div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
					<div className='relative w-full h-[230px]'>
						<img
							src={image}
							alt={name}
							className='w-full h-full object-cover rounded-2xl'
						/>

						<div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-3'>
							<div
								onClick={() => window.open(page_link, '_blank')}
								className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
							>
								<img
									className='w-1/2 h-1/2 object-contain'
									src={site}
									alt='website'
									title='Project website'
								/>
							</div>

							<div
								onClick={() => window.open(source_code_link, '_blank')}
								className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
							>
								<img
									className='w-1/2 h-1/2 object-contain'
									src={github}
									alt='github'
									title='Github repo'
								/>
							</div>
						</div>
					</div>

					<div className='mt-5'>
						<h3 className='text-white font-bold text-[24px]'>{name}</h3>
						<p className='mt-2 text-secondary text-[14px]'>{description}</p>
					</div>

					<div className='mt-4 flex flex-wrap gap-2'>
						{tags.map(tag => (
							<p
								key={tag.name}
								className='text-[14px]'
								style={{ color: `${tag.color}` }}
							>
								#{tag.name}
							</p>
						))}
					</div>
				</div>
			</motion.div>
		</Tilt>
	)
}

function Works() {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className='mt-20 flex justify-center flex-wrap gap-7'>
				{projects.map((project, index) => {
					return <ProjectCard key={project.name} index={index} {...project} />
				})}
			</div>
		</>
	)
}

export default SectionWrapper(Works, 'work')
