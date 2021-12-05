import React from 'react'
import styles from './styles'
import LikeButton from '../../../like_button'
import { parse } from '../../helpers'

const Comment = (props) => {
	const { data } = props
	return (
		<div style={styles.comment}>
			<p style={styles.text}>
				<strong tabIndex="0" style={styles.name}>{data.node.owner.username}</strong>
				<span dangerouslySetInnerHTML={{ __html: parse(data.node.text)}}></span>
			</p>
			<LikeButton customStyles={styles.like} />
		</div>
	)
}

export default Comment
