import styles from '../../styles/Home.module.scss' //only temp
import Layout from '../../components/Layout'

export const config = { amp: false }

const Activity = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<h1>Activity</h1>
			</div>
		</Layout>
	)
}

export default Activity
