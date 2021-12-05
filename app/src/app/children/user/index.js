import React from 'react'
import styles from './styles'

const User = (props) => {
	const { data } = props
	return (
		<div style={styles.user}>
			<img
				src={data.owner.profile_pic_url}
				style={styles.image}
				alt={data.owner.username}
			/>
			<div className="name">
				<strong tabIndex="0" style={styles.name}>{data.owner.username}</strong>
				<small style={styles.location}>{data.location.name}</small>
			</div>
		</div>
	)
}

export default User
