import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
	const isLoggedIn = false
	return (
		<>
			<Header isLoggedIn={isLoggedIn} />
			{props.children}
			<Footer isLoggedIn={isLoggedIn} />
		</>
	)
}

export default Layout
