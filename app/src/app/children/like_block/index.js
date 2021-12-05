import React from 'react'
import LikeButton from '../like_button'
import styles from './styles'
import { getTimeAgo, getLikes } from './helpers'

const LikeBlock = (props) => {
	const { data } = props

	return (
		<div style={styles.likeBlock}>
			<div>
				<strong style={styles.likes}>{getLikes(data)}</strong>
				{/* Not sure if this is the correct timestamp to be using but could only see on in the data.json */}
				<small style={styles.timeAgo}>{getTimeAgo(data.taken_at_timestamp)}</small>
			</div>
			<LikeButton customStyles={styles.like} />
		</div>
	)
}

export default LikeBlock
