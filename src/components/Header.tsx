import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
//import styled from 'styled-components'

const Header = (props) => {
	const [menuToggle, useMenuToggle] = useState(false)

	const toggleMenu = () => {
		useMenuToggle((value) => !value)
	}

	console.log(props.isLoggedIn)
	return (
		<header>
			<nav className='cursor-pointer flex items-center bg-black p-3 flex-wrap'>
				<Link href='/'>
					<span className='cursor-pointer p-2 mr-4 inline-flex items-center'>
						<span className='cursor-pointer text-xl text-white font-bold uppercase tracking-wide'>
							byronwade.com
						</span>
					</span>
				</Link>
				<button
					onClick={toggleMenu}
					className={`mt-0 cursor-pointer text-white inline-flex p-3 hover:bg-gray-700 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler`}>
					<AiOutlineMenu />
				</button>
				<div
					className={`cursor-pointer ${
						menuToggle === true ? '' : 'hidden'
					} top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
					<div className='cursor-pointer lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
						<Link href='/'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-700 hover:text-white'>
								<span>Home</span>
							</div>
						</Link>
						<Link href='/about'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-700 hover:text-white'>
								<span>About</span>
							</div>
						</Link>
						<Link href='/work'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-700 hover:text-white'>
								<span>Work</span>
							</div>
						</Link>
						<Link href='/case-studies'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-700 hover:text-white'>
								<span>Case Studies</span>
							</div>
						</Link>
						<Link href='/contact'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-700 hover:text-white'>
								<span>Contact</span>
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header
