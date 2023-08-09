import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	bootstrap,
	nodejs,
	mongodb,
	git,
	figma,
	threejs,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	ecommerce,
	weightTracker,
	todoList,
	vowelCounter,
	fakePortfolio,
	calculator,
	snakeGame,
} from '../assets'

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
]

const services = [
	{
		title: 'Frontend Developer',
		icon: web,
	},
	// {
	// 	title: 'React Native Developer',
	// 	icon: mobile,
	// },
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
]

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Bootstrap',
		icon: bootstrap,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
]

// const experiences = [
// 	{
// 		title: 'React.js Developer',
// 		company_name: 'Starbucks',
// 		icon: starbucks,
// 		iconBg: '#383E56',
// 		date: 'March 2020 - April 2021',
// 		points: [
// 			'Developing and maintaining web applications using React.js and other related technologies.',
// 			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
// 			'Implementing responsive design and ensuring cross-browser compatibility.',
// 			'Participating in code reviews and providing constructive feedback to other developers.',
// 		],
// 	},
// 	{
// 		title: 'React Native Developer',
// 		company_name: 'Tesla',
// 		icon: tesla,
// 		iconBg: '#E6DEDD',
// 		date: 'Jan 2021 - Feb 2022',
// 		points: [
// 			'Developing and maintaining web applications using React.js and other related technologies.',
// 			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
// 			'Implementing responsive design and ensuring cross-browser compatibility.',
// 			'Participating in code reviews and providing constructive feedback to other developers.',
// 		],
// 	},
// 	{
// 		title: 'Web Developer',
// 		company_name: 'Shopify',
// 		icon: shopify,
// 		iconBg: '#383E56',
// 		date: 'Jan 2022 - Jan 2023',
// 		points: [
// 			'Developing and maintaining web applications using React.js and other related technologies.',
// 			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
// 			'Implementing responsive design and ensuring cross-browser compatibility.',
// 			'Participating in code reviews and providing constructive feedback to other developers.',
// 		],
// 	},
// 	{
// 		title: 'Full stack Developer',
// 		company_name: 'Meta',
// 		icon: meta,
// 		iconBg: '#E6DEDD',
// 		date: 'Jan 2023 - Present',
// 		points: [
// 			'Developing and maintaining web applications using React.js and other related technologies.',
// 			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
// 			'Implementing responsive design and ensuring cross-browser compatibility.',
// 			'Participating in code reviews and providing constructive feedback to other developers.',
// 		],
// 	},
// ]

// const testimonials = [
// 	{
// 		testimonial:
// 			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
// 		name: 'Sara Lee',
// 		designation: 'CFO',
// 		company: 'Acme Co',
// 		image: 'https://randomuser.me/api/portraits/women/4.jpg',
// 	},
// 	{
// 		testimonial:
// 			"I've never met a web developer who truly cares about their clients' success like Rick does.",
// 		name: 'Chris Brown',
// 		designation: 'COO',
// 		company: 'DEF Corp',
// 		image: 'https://randomuser.me/api/portraits/men/5.jpg',
// 	},
// 	{
// 		testimonial:
// 			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
// 		name: 'Lisa Wang',
// 		designation: 'CTO',
// 		company: '456 Enterprises',
// 		image: 'https://randomuser.me/api/portraits/women/6.jpg',
// 	},
// ]

const projects = [
	{
		name: 'Sanity-Stripe Ecommerce',
		description: 'Ecommerce page with full payment funcionality.',
		tags: [
			{
				name: 'react',
				color: 'aqua',
			},
			{
				name: 'sanity',
				color: 'indianred',
			},
			{
				name: 'express',
				color: 'gray',
			},
			{
				name: 'stripe',
				color: 'lightseagreen',
			},
		],
		image: ecommerce,
		page_link: 'https://sanity-stripe-ecommerce-seven.vercel.app/',
		source_code_link: 'https://github.com/jeflugo/sanity-stripe-ecommerce',
	},
	{
		name: 'Weight tacker',
		description:
			'This app allows you to track your weight in time and shows you how much have you lost or gained.',
		tags: [
			{
				name: 'html5',
				color: 'orange',
			},
			{
				name: 'css3',
				color: 'aqua',
			},
			{
				name: 'js',
				color: 'yellow',
			},
		],
		image: weightTracker,
		page_link: 'https://porfolio-jeferson-weight-tracker.netlify.app',
		source_code_link: 'https://github.com/jeflugo/weight-tracker',
	},
	{
		name: 'Todo List',
		description: 'Simple TODO list app with full CRUD functionality.',
		tags: [
			{
				name: 'react',
				color: 'aqua',
			},
			{
				name: 'typescript',
				color: 'dodgerblue',
			},
			{
				name: 'react-redux',
				color: 'blueviolet',
			},
			{
				name: 'bootstrap',
				color: 'purple',
			},
		],
		image: todoList,
		page_link: 'https://portfolio-jeferson-todo-app.netlify.app/',
		source_code_link: 'https://github.com/jeflugo/todo-list-react-ts',
	},
	{
		name: 'Vowel counter',
		description: 'App to count how many vowels there are in a certain text.',
		tags: [
			{
				name: 'react',
				color: 'aqua',
			},
			{
				name: 'typescript',
				color: 'dodgerblue',
			},
			{
				name: 'bootstrap',
				color: 'purple',
			},
		],
		image: vowelCounter,
		page_link: 'https://portfolio-jeferson-vowels-counter.netlify.app/',
		source_code_link: 'https://github.com/jeflugo/vowels-counter',
	},
	{
		name: 'Fake portfolio',
		description: 'Simple web portfolio with html and css.',
		tags: [
			{
				name: 'html5',
				color: 'orange',
			},
			{
				name: 'css3',
				color: 'aqua',
			},
		],
		image: fakePortfolio,
		page_link: 'https://portfolio-jeferson-fake-page.netlify.app/',
		source_code_link: 'https://github.com/jeflugo/fake-page',
	},
	{
		name: 'Calculator',
		description:
			'Simple calculator created with JavaScript with Theme switch button.',
		tags: [
			{
				name: 'html5',
				color: 'orange',
			},
			{
				name: 'css3',
				color: 'aqua',
			},
			{
				name: 'js',
				color: 'yellow',
			},
		],
		image: calculator,
		page_link: 'https://portfolio-jeferson-calculator.netlify.app/',
		source_code_link: 'https://github.com/jeflugo/calculator-js',
	},
	{
		name: 'Snake Game',
		description:
			'Become an anaconda and start eating some cows, simple and fun game created using JS.',
		tags: [
			{
				name: 'html5',
				color: 'orange',
			},
			{
				name: 'css3',
				color: 'aqua',
			},
			{
				name: 'js',
				color: 'yellow',
			},
		],
		image: snakeGame,
		page_link: 'https://portfolio-jeferson-anaconda-game.netlify.app/',
		source_code_link: 'https://github.com/jeflugo/anaconda-game',
	},
]

export { services, technologies, projects }
