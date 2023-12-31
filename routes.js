import HomePage from './views/HomePage.js'
import AboutUs from './views/AboutUs.js'
import Mail from './apps/mail/pages/MailIndex.js'
import Notes from './apps/notes/pages/NoteIndex.js'
import MailDetails from './apps/mail/pages/MailDetails.js'
import MailList from './apps/mail/cmps/MailList.js'

const { createRouter, createWebHashHistory } = VueRouter

const routerOptions = {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage,
		},
		{
			path: '/about',
			component: AboutUs,
		},
		{
			path: '/mail',
			component: Mail,
			children: [
				{
					path: 'inbox',
					component: MailList
				},
				{
					path: ':mailId',
					component: MailDetails
				}
			]
		},
		{
			path: '/notes',
			component: Notes,
		},
	],
}

export const router = createRouter(routerOptions)
