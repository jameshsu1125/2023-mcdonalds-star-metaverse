export const setMaxLength = (text, maxLength = 16) => {
	const split = text.split('');
	const map = split.map((s, i) => (text.charCodeAt(i) >= 0 && text.charCodeAt(i) <= 128 ? 1 : 2));
	let n = 0;
	const charLength =
		map.length > 0 &&
		map.reduce((accumulator, currentValue, index) => {
			if (accumulator === maxLength || accumulator === maxLength - 1) {
				n = index;
			}
			return accumulator + currentValue;
		});

	if (charLength > maxLength) return split.slice(0, n).join('');
	return text;
};

export const findID = (answers) => {
	const [A] = Object.entries(
		answers.reduce((prev, current) => {
			const clone = { ...prev };
			if (current === 'E' || current === 'I') {
				let currentKeyValue = prev[current];
				if (prev[current]) currentKeyValue += 1;
				else currentKeyValue = 1;
				clone[current] = currentKeyValue;
				return clone;
			}
			return clone;
		}, {}),
	)
		.filter((e) => {
			const [, value] = e;
			if (value >= 2) return true;
			return false;
		})
		.map((e) => e[0]);
	const [B] = Object.entries(
		answers.reduce((prev, current) => {
			const clone = { ...prev };
			if (current === 'S' || current === 'N') {
				let currentKeyValue = prev[current];
				if (prev[current]) currentKeyValue += 1;
				else currentKeyValue = 1;
				clone[current] = currentKeyValue;
				return clone;
			}
			return clone;
		}, {}),
	)
		.filter((e) => {
			const [, value] = e;
			if (value >= 2) return true;
			return false;
		})
		.map((e) => e[0]);
	const [C] = Object.entries(
		answers.reduce((prev, current) => {
			const clone = { ...prev };
			if (current === 'T' || current === 'F') {
				let currentKeyValue = prev[current];
				if (prev[current]) currentKeyValue += 1;
				else currentKeyValue = 1;
				clone[current] = currentKeyValue;
				return clone;
			}
			return clone;
		}, {}),
	)
		.filter((e) => {
			const [, value] = e;
			if (value >= 2) return true;
			return false;
		})
		.map((e) => e[0]);
	return A + B + C;
};
