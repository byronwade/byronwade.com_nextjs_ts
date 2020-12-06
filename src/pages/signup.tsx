//https://github.com/garmeeh/next-seo - Can do Schema, openGraph and all other SEO headers.
import { NextSeo } from 'next-seo'
import { loadStripe } from '@stripe/stripe-js'
import {
	CardElement,
	Elements,
	useStripe,
	useElements,
} from '@stripe/react-stripe-js'
import Layout from '../components/Layout'
export const config = { amp: false }

const Signup = () => {
	const stripe = useStripe()
	const elements = useElements()

	const handleSubmit = async (event) => {
		event.preventDefault()
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
		})
	}

	return (
		<>
			<NextSeo
				title='Email Me Work | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div className='container'>
					<form onSubmit={(e) => e.preventDefault()}>
						{/* <Message>
							This is just a message for someone to read
						</Message> */}

						<label htmlFor='username'>Username</label>
						<input name='username' id='username' />

						<label htmlFor='email'>Email</label>
						<input name='email' id='email' />

						<label htmlFor='phoneNumber'>Phone Number</label>
						<input name='phoneNumber' id='phoneNumber' />

						<CardElement />

						<label htmlFor='password'>Password</label>
						<input type='password' name='password' id='password' />

						<button disabled={!stripe}>Pay $1/month</button>
					</form>
				</div>
			</Layout>
		</>
	)
}

export default Signup
