import { NextSeo } from 'next-seo'
import Layout from '../src/components/Layout'

const Home = ({ children, frontMatter }) => {
	console.log(frontMatter)
	return (
		<div>
			<NextSeo
				title='Next.js Resources - Books, Videos, Articles, Examples'
				description={`A curated list of Next.js resources: books, videos, examples, articles about using Next.js.`}
				canonical='https://masteringnextjs.com/resources'
				openGraph={{
					url: 'https://masteringnextjs.com/resources',
					title:
						'Next.js Resources - Books, Videos, Articles, Examples',
					description: `A curated list of Next.js resources: books, videos, examples, articles about using Next.js.`,
				}}
			/>
			<Layout>
				<article className='prose lg:prose-xl mx-auto mt-32 mb-32'>
					{children}
				</article>
			</Layout>
		</div>
	)
}

export default Home
