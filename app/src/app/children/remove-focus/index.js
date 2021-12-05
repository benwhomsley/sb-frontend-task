import { useEffect } from 'react';

const handleAddTabbing = event => {
	if (event.keyCode === 9) {
		document.body.classList.add('user-is-tabbing');
		for (const svg of document.body.getElementsByTagName('svg')) {
			svg.style.outline = '';
		}
	}
};
const handleRemoveTabbing = event => {
	document.body.classList.remove('user-is-tabbing');
	for (const svg of document.body.getElementsByTagName('svg')) {
		svg.style.outline = 'none';
	}
};

const RemoveFocusWhenNotTab = () => {
	useEffect(() => {
		window.addEventListener('keydown', handleAddTabbing);
		window.addEventListener('mousedown', handleRemoveTabbing)
		return () => {
			window.removeEventListener('mousedown', handleRemoveTabbing)
			window.removeEventListener('keydown', handleAddTabbing);
		};
	});

	return null;
};

export default RemoveFocusWhenNotTab;