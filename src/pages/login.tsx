//https://github.com/garmeeh/next-seo - Can do Schema, openGraph and all other SEO headers.
import { NextSeo } from 'next-seo'
//import styles from '../styles/Home.module.scss' //only temp
import Layout from '../components/Layout'

export const config = { amp: false }

const Login = () => {
	return (
		<>
			<NextSeo
				title='Email Me Work | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs htmlFor freelancers on a budget.'
			/>
			<Layout>
				{/* <div classNameName='container'>
					<form onSubmit={(e) => e.preventDefault()}>
						<label htmlFor='username'>Username</label>
						<input name='username' id='username' />
						<label htmlFor='password'>Password</label>
						<input type='password' name='password' id='password' />
						<div>
							<label>
								<input type='checkbox' />
								Remember me
							</label>
						</div>
						<button type='button'>Submit</button>
					</form>
				</div> */}

<div id="login-page">
    <div className="max-w-6xl relative z-10 m-auto px-6">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center login-section">
            <div className="pt-8 sm:w-full sm:max-w-md text-left m-auto lg:m-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">Log in to your account</h1>
                <p className="mb-10">Not a member yet? <a className="text-blue-600" href="https://www.tailwindapp.com">Start your free trial now!</a></p>
                <div className="lg:pr-28">
                
                    <form action="/login/check" method="POST" id="login-form">
                        <input type="hidden" name="redirect_to" value="" />
                        <input type="hidden" name="attempts" value="" />
                        <input type="hidden" name="cust_id" id="cust_id" value="" />
                        <input type="hidden" name="token" id="token" value="" />
                        <div>
													<label htmlFor="email" className="block text-sm font-medium leading-8 text-gray-700">
															Email address
													</label>
													<div className="mt-1 rounded-md">
															<input id="email" value="" type="email" placeholder="Email" name="email" autofocus="" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
													</div>
                        </div>

                        <div className="mt-2">
													<label htmlFor="password" className="block text-sm font-medium leading-8 text-gray-700">
															Password
													</label>
													<div className="mt-1 rounded-md">
															<input type="password" placeholder="Password" name="password" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
													</div>
                        </div>

                        <div className="mt-2 flex items-center justify-between">
													<div className="cursor-pointer flex items-center">
															<input id="remember-me" type="checkbox" className="cursor-pointer form-checkbox h-4 w-4 tw-blue transition duration-150 ease-in-out" />
															<label htmlFor="remember-me" className="cursor-pointer ml-2 block text-sm leading-5 text-gray-900">
															Remember me
															</label>
													</div>

													<div className="text-sm leading-5">
															<a href="/password-reset/" className="font-medium tw-blue focus:outline-none no-underline transition ease-in-out duration-150">
															Forgot your password?
															</a>
													</div>
                        </div>

                        <div className="mt-10">
													<span className="block w-full rounded-md">
															<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-gray-700 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out">
															Log in
															</button>
													</span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-center pb-10 pt-10 lg:pt-0 m-auto lg:m-0">
                <img className="px-4 pt-8" src="https://d31a41pz1c3dkr.cloudfront.net/img/login/feature-images/create.png" alt="The new Tail" />
                <div className="max-w-xs m-auto">
                    <h2 className="font-bold">What's new htmlFor Pinterest?</h2>
                    <p>Introducing Tailwind Create. In one magical click, transform your photos into dozens of personalized Pin design ideas.</p>
                    <div className="inline-flex"><a className="mt-4 ml-1 secondary-cta flex items-center" href="/create?utm_source=catalog-site&amp;utm_medium=cta&amp;utm_campaign=login-screen&amp;utm_content=create-launch">Explore Tailwind Create <svg width="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current"><path className="heroicon-ui" d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"></path></svg></a></div>
                </div>
            </div>
        </div>

    </div>
</div>


			</Layout>
		</>
	)
}

export default Login
