import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
//import styled from 'styled-components'

const WebsiteHeader = (props) => {
	const [menuToggle, useMenuToggle] = useState(false)

	const toggleMenu = () => {
		useMenuToggle((value) => !value)
	}

	console.log(props.isLoggedIn)
	return (
		<header>
			{/* <Link href='/'>Home</Link>
			<Link href='/jobs'>Jobs</Link>
			<Link href='/pricing'>Pricing</Link>
			<Link href='/support'>Support</Link>
			<Link href='/login'>
				<button>Login</button>
			</Link>
			<Link href='/signup'>
				<button>Signup</button>
			</Link>

			{props.isLoggedIn && <Link href='/app/dashboard'>Dashboard</Link>} */}
			<nav className='cursor-pointer flex items-center bg-black p-3 flex-wrap'>
				<Link href='/'>
					<span className='cursor-pointer p-2 mr-4 inline-flex items-center'>
						<span className='cursor-pointer text-xl text-white font-bold uppercase tracking-wide'>
							EmailMeWork
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

						<Link href='/jobs'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-700 hover:text-white'>
								<span>Jobs</span>
							</div>
						</Link>

						<Link href='/pricing'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-700 hover:text-white'>
								<span>Pricing</span>
							</div>
						</Link>
						<Link href='/support'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-700 hover:text-white'>
								<span>Support</span>
							</div>
						</Link>
						<Link href='/login'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-700 hover:text-white'>
								<span>Login</span>
							</div>
						</Link>
						<Link href='/signup'>
							<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-700 hover:text-white'>
								<span>Signup</span>
							</div>
						</Link>
						
						{props.isLoggedIn && 
            <div class="ml-3 relative">
              <div>
                <button class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
              </div>
              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
              </div>
            </div>
						}

					</div>
				</div>
			</nav>
		</header>
	)
}

export default WebsiteHeader
