import React from 'react'
import Image from './children/image'
import LikeBlock from './children/like_block'
import User from './children/user'
import CommentsBlock from './children/comments_block'
import styles from './styles'
import RemoveFocusWhenNotTab from './children/remove-focus'

const App = (props) => {
	const { data } = props
	return (
		<main style={styles.main}>
			<RemoveFocusWhenNotTab />
			<div style={styles.image}>
				<Image data={data} />
			</div>
			<div style={styles.text}>
				<User data={data} />
				<CommentsBlock data={data} />
				<LikeBlock data={data} />
			</div>
		</main>
	)
}

export default App
