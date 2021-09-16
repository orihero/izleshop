export const divideArr = (arr, divide = 2, emptyV = null) => {
	let newArr = [];

	const a = Math.floor(arr.length / divide);
	const residue = arr.length % divide;
	const loopCount = residue ? a + 1 : a;

	for (let i = 0; i < a; i++) {
		newArr.push(arr.slice(i * divide, (i + 1) * divide));
	}

	if (residue) {
		let tmpArr = new Array(divide).fill(emptyV);
		for (let i = 0; i < residue; i++) {
			tmpArr[i] = arr[a * divide + i];
		}
		newArr.push(tmpArr);
	}

	return newArr;
};
