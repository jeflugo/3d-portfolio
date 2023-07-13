import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

function Contact() {
	const formRef = useRef()
	const initialForm = {
		name: '',
		email: '',
		message: '',
	}
	const [form, setform] = useState(initialForm)
	const [loading, setLoading] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()

		setLoading(true)

		const SERVICE_KEY = 'service_c9yl5hj'
		const TEAMPLATE_KEY = 'template_reyg3wd'
		const PUBLIC_KEY = 'N9laSM_9-45TMnPYW'

		const myName = 'Jeferson Lugo'
		const myEmail = 'jefersoneduardoluego@gmail.com'

		emailjs
			.send(
				SERVICE_KEY,
				TEAMPLATE_KEY,
				{
					from_name: form.name,
					to_name: myName,
					from_email: form.email,
					to_email: myEmail,
					message: form.message,
				},
				PUBLIC_KEY,
			)
			.then(
				() => {
					setLoading(false)
					alert('Thank you. I will get back to you as soon as possible.')

					setform(() => initialForm)
				},
				err => {
					setLoading(false)

					console.log(err)
					alert('Something went wrong')
				},
			)
	}
	const handleChange = e => {
		const { name, value } = e.target

		setform({ ...form, [name]: value })
	}

	return (
		<div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h2 className={styles.sectionHeadText}>Contact.</h2>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='mt-12 flex flex-col gap-8'
				>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your name</span>

						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							placeholder='Whats your name?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your email</span>

						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder='Whats your email?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Your message</span>

						<textarea
							rows={7}
							name='message'
							value={form.message}
							onChange={handleChange}
							placeholder='What do you want to say?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
							style={{ resize: 'none' }}
						/>
					</label>

					<button
						type='submit'
						className='bg-violet-800 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadoww-primary rounded-xl'
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
			>
				<EarthCanvas />
			</motion.div>
		</div>
	)
}

export default SectionWrapper(Contact, 'contact')
