import WebsiteHeader from './website/WebsiteHeader'
import WebsiteFooter from './website/WebsiteFooter'
import AppHeader from './app/AppHeader'
import AppFooter from './app/AppFooter'

import { useRouter } from 'next/router'

const Layout = (props) => {
	const router = useRouter()

	const isLoggedIn = false
	return (
		<>
			{!router.pathname.includes('/app/') ? (
				<WebsiteHeader isLoggedIn={isLoggedIn} />
			) : (
				<AppHeader isLoggedIn={isLoggedIn} />
			)}

			{props.children}

			{!router.pathname.includes('/app/') ? (
				<WebsiteFooter isLoggedIn={isLoggedIn} />
			) : (
				<AppFooter isLoggedIn={isLoggedIn} />
			)}
		</>
	)
}

export default Layout
