import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function NavigateBtn() {
	const [y, setY] = useState(0)

	useEffect(() => {
		window.addEventListener('scroll', e => {
			setY(() => window.scrollY)
		})

		return () => {
			window.removeEventListener('scroll', e => {
				setY(() => window.scrollY)
			})
		}
	}, [])
	return (
		<div className='fixed bottom-10 right-10'>
			<motion.div
				animate={{ y: [0, 10, 0] }}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					reapeatType: 'loop',
				}}
			>
				{y !== 0 ? (
					<a href='#hero'>
						<div
							className='w-[60px] h-[60px] rounded-full border-4 border-secondary flex justify-center items-center text-[30px] font-bold'
							title='Navigate Up'
						>
							<p className='ml-[2px] mb-[4px] text-secondary -rotate-90'>{`>`}</p>
						</div>
					</a>
				) : (
					<a href='#about'>
						<div
							className='w-[60px] h-[60px] rounded-full border-4 border-secondary flex justify-center items-center text-[30px] font-bold'
							title='Navigate Down'
						>
							<p className='ml-[2px] text-secondary rotate-90'>{`>`}</p>
						</div>
					</a>
				)}
			</motion.div>
		</div>
	)
}
