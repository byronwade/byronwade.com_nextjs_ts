import React, { useState } from 'react'
import Image from 'next/image'
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
		<>
			<header>
				<nav className='cursor-pointer flex items-center bg-black p-3 flex-wrap'>
					<span className='cursor-pointer p-2 mr-4 inline-flex items-center'>
						<span className='cursor-pointer text-xl text-white font-bold uppercase tracking-wide'>
							<div className='flex'>
								<div className='flex-inline'>
									<Link href='/'>
										<Image
											src='/images/logo.png'
											alt='Picture of the author'
											width={50}
											height={45}
										/>
									</Link>
								</div>
								<div className='ml-5'>
									<div className='text-base'>
										<Link href='tel:8314306011'>
											<a target='_blank'>
												P: 831.430.6011
											</a>
										</Link>
									</div>
									<div className='text-base'>
										<Link href='mailto:bcw1995@gmail.com'>
											<a target='_blank'>
												E: bcw1995@gmail.com
											</a>
										</Link>
									</div>
								</div>
							</div>
						</span>
					</span>
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
							<Link href='/blog'>
								<div className='cursor-pointer lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-700 hover:text-white'>
									<span>Blog</span>
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
			<div className='bg-purple-600'>
				<div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-between flex-wrap'>
						<div className='w-0 flex-1 flex items-center'>
							<span className='flex p-2 rounded-lg bg-purple-800'>
								<svg
									className='h-6 w-6 text-white'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
									/>
								</svg>
							</span>
							<p className='ml-3 font-medium text-white truncate'>
								<span className='md:hidden'>
									<strong className=''>Free</strong> website?
								</span>
								<span className='hidden md:inline'>
									Big news! We're excited to announce{' '}
									<strong className=''>free</strong> websites
									for a limited time!
								</span>
							</p>
						</div>
						<div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
							<a
								href='#'
								className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-purple-600 bg-white hover:bg-purple-50'>
								Learn more
							</a>
						</div>
						<div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
							<button
								type='button'
								className='-mr-1 flex p-2 rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'>
								<span className='sr-only'>Dismiss</span>
								<svg
									className='h-6 w-6 text-white'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
