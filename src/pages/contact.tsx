//https://github.com/garmeeh/next-seo - Can do Schema, openGraph and all other SEO headers.
import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

export const config = { amp: false }

const Contact = () => {
	return (
		<>
			<NextSeo
				title='Email Me Work | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div className='relative bg-white'>
					<div className='absolute inset-0'>
						<div className='absolute inset-y-0 left-0 w-1/2 bg-gray-50'></div>
					</div>
					<div className='relative max-w-7xl mx-auto lg:grid lg:grid-cols-5'>
						<div className='bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
							<div className='max-w-lg mx-auto'>
								<h2 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>
									Get in touch
								</h2>
								<p className='mt-3 text-lg leading-6 text-gray-500'>
									Nullam risus blandit ac aliquam justo ipsum.
									Quam mauris volutpat massa dictumst amet.
									Sapien tortor lacus arcu.
								</p>
								<dl className='mt-8 text-base text-gray-500'>
									<div>
										<dt className='sr-only'>
											Postal address
										</dt>
										<dd>
											<p>742 Evergreen Terrace</p>
											<p>Springfield, OR 12345</p>
										</dd>
									</div>
									<div className='mt-6'>
										<dt className='sr-only'>
											Phone number
										</dt>
										<dd className='flex'>
											<svg
												className='flex-shrink-0 h-6 w-6 text-gray-400'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												aria-hidden='true'>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													stroke-width='2'
													d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
												/>
											</svg>
											<span className='ml-3'>
												+1 (555) 123-4567
											</span>
										</dd>
									</div>
									<div className='mt-3'>
										<dt className='sr-only'>Email</dt>
										<dd className='flex'>
											<svg
												className='flex-shrink-0 h-6 w-6 text-gray-400'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												aria-hidden='true'>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													stroke-width='2'
													d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
												/>
											</svg>
											<span className='ml-3'>
												support@example.com
											</span>
										</dd>
									</div>
								</dl>
								<p className='mt-6 text-base text-gray-500'>
									Looking for careers?{' '}
									<a
										href='#'
										className='font-medium text-gray-700 underline'>
										View all job openings
									</a>
									.
								</p>
							</div>
						</div>
						<div className='py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
							<div className='max-w-lg mx-auto lg:max-w-none'>
								<form
									action='#'
									method='POST'
									className='grid grid-cols-1 gap-y-6'>
									<div>
										<label
											htmlFor='full_name'
											className='sr-only'>
											Full name
										</label>
										<input
											type='text'
											name='full_name'
											id='full_name'
											autoComplete='name'
											className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
											placeholder='Full name'
										/>
									</div>
									<div>
										<label
											htmlFor='email'
											className='sr-only'>
											Email
										</label>
										<input
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
											placeholder='Email'
										/>
									</div>
									<div>
										<label
											htmlFor='phone'
											className='sr-only'>
											Phone
										</label>
										<input
											type='text'
											name='phone'
											id='phone'
											autoComplete='tel'
											className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
											placeholder='Phone'
										/>
									</div>
									<div>
										<label
											htmlFor='message'
											className='sr-only'>
											Message
										</label>
										<textarea
											id='message'
											name='message'
											rows={4}
											className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5'
											placeholder='Message'></textarea>
									</div>
									<div>
										<button
											type='submit'
											className='flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-gray-700 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out'>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}

export default Contact
