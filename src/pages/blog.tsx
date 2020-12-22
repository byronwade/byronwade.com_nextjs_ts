import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllFilesFrontMatter } from '../../lib/mdx'

import styled from 'styled-components'
import tw from 'twin.macro'

export const config = { amp: false }

const Header = styled.header`
	${tw`text-black`};
`

const Blog = ({ posts }) => {
	console.log(posts)
	return (
		<>
			<NextSeo
				title='Byron Wades Web Development | Quickly get jobs you actually want.'
				description='Email me work is a company tasked to find the best jobs for freelancers on a budget.'
			/>
			<Layout>
				<div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
					{posts.map((post, index) => (
						<div key={index}>
							{post.featuredImage && (
								<img
									src={`http://www.localhost:3000/images/${post.slug}/${post.featuredImage}`}
								/>
							)}
							<h1>{post.title}</h1>
							<p>{post.date}</p>
							<p>{post.description}</p>
							<Link href={`/blog/${post.slug}`}>
								<span className='cursor-pointer font-medium text-gray-700 underline'>
									Learn More
								</span>
							</Link>
						</div>
					))}
				</div>
			</Layout>
		</>
	)
}

export default Blog

export async function getStaticProps() {
	const posts = await getAllFilesFrontMatter('blog')

	return { props: { posts } }
}
