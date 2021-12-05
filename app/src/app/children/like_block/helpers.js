export function getTimeAgo(time) {
	const seconds = new Date().getTime()/1000 - time;
	if (seconds > 0) {
		const intervals = {
			'year': 31536000,
			'month': 2592000,
			'week': 604800,
			'day': 86400,
			'hour': 3600,
			'minute': 60,
			'second': 1
		};
		let counter;
		for (const i in intervals) {
			counter = Math.floor(seconds / intervals[i]);
			if (counter > 0) {
				if (counter === 1) {
					// singular (eg. 1 day ago)
					return counter + ' ' + i + 'ago';
				} else {
					// plural (eg. 2 days ago)
					return counter + ' ' + i + 's ago';
				}
			}
		}
	} else {
		return "Just now";
	}
}

export function getLikes(data) {
	if (data.edge_media_preview_like.count > 1) {
		return data.edge_media_preview_like.count.toLocaleString() + ' likes';
	} else {
		return data.edge_media_preview_like.count.toLocaleString() + ' like';
	}
}