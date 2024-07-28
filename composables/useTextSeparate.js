export const useTextSeparate = (node, options) => {
	const opt = {
		byLetters: true,
		...options,
	};

	let itemsArray;

	node.style.overflow = 'hidden';

	if (opt.byLetters) {
		/* по буквам */
		itemsArray = node.innerText.split('');
	} else if (!opt.byLetters) {
		/* по строкам */
		itemsArray = node.innerHTML.replace(/<br\s\/>|<br>/gi, '<br/>').split('<br/>');
	}

	node.innerHTML = '';
	const spansArray = [];

	itemsArray?.forEach((item) => {
		const spanWrapper = document.createElement('span');
		const span = document.createElement('span');
		spanWrapper.appendChild(span);

		span.innerText = item;

		Object.assign(spanWrapper.style, { display: opt.byLetters ? 'inline-block' : 'block', overflow: 'hidden' });
		Object.assign(span.style, { display: 'inline-block' });

		spansArray.push(span);
		node.appendChild(spanWrapper);
	});

	return spansArray;
};
