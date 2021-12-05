import React from 'react'
import styles from './styles'
import { parse } from '../../helpers'

const Caption = (props) => {
	const { data } = props
	return (
		<div>
			<p style={styles.caption}>
				<strong style={styles.name}>{data.owner.username}</strong>
				<span dangerouslySetInnerHTML={{ __html: parse(data.edge_media_to_caption.edges[0].node.text)}}></span>
			</p>
		</div>
	)
}

export default Caption
