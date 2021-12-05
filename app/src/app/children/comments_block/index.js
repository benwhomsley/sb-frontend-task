import React from 'react'
import Comment from './children/comment'
import Caption from './children/caption'
import styles from './styles'

const CommentsBlock = (props) => {
	const { data } = props
	let comments = data.edge_media_to_comment.edges;
	let commentList = [];
	comments.forEach((comment, index) => {
		commentList.push(<Comment key={index} data={comment} />)
	})
	return (
		<div style={styles.commentsBlock}>
			<div style={styles.commentsBlockInner}>
				<Caption data={data} />
				{commentList}
			</div>
		</div>
	)
}

export default CommentsBlock
