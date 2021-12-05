import React, { useState } from 'react'
import UnlikedIcon from './children/unliked_icon'
import LikedIcon from './children/liked_icon'

const LikeButton = (props) => {
	const { customStyles } = props;
	const [state, setState] = useState('unliked')

	return (
		<div>
			{state === 'unliked' && (
				<UnlikedIcon onLikeClick={() => setState('liked')} style={customStyles} />
			)}

			{state === 'liked' && (
				<LikedIcon onLikeClick={() => setState('unliked')} style={customStyles} />
			)}
		</div>
	)
}

export default LikeButton
