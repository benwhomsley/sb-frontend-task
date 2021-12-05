const rules = [/(@[^\s]+)/g, /([#|＃][^\s]+)/g];

export function parse(value, action) {
	for (const rule of rules) {
		value = value.replace(rule, link => {
			return `<span tabindex="0" style="color: rgb(0,46,106); cursor: pointer;">${link}</span>`
		}).toString();
	}

	return value;
};