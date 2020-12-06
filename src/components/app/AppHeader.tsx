import Link from 'next/link'

const AppHeader = (props) => {
	console.log(props.isLoggedIn)
	return (
		<header>
			<Link href='/'>
				<a className='menu'>Home</a>
			</Link>
			<Link href='/app/dashboard'>
				<a className='menu'>Dashboard</a>
			</Link>
			<Link href='/app/jobs'>
				<a className='menu'>Jobs</a>
			</Link>
			<Link href='/app/referrals'>
				<a className='menu'>Referrals</a>
			</Link>
			<Link href='/app/activity'>
				<a className='menu'>Activity</a>
			</Link>
			<Link href='/app/settings'>
				<a className='menu'>Settings</a>
			</Link>
		</header>
	)
}

export default AppHeader
