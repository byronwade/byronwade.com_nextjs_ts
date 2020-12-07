import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
	const isLoggedIn = false
	return (
		<>
			<Header {...isLoggedIn} />
			{props.children}
			<Footer {...isLoggedIn} />
		</>
	)
}

export default Layout
