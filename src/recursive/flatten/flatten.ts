/* eslint-disable @typescript-eslint/no-explicit-any */
export function flatten(oldArr: any): number[] {
	let newArr: number[] = [];
	for (let i = 0; i < oldArr.length; i++) {
		if (Array.isArray(oldArr[i])) {
			newArr = newArr.concat(flatten(oldArr[i]));
		} else {
			newArr.push(oldArr[i]);
		}
	}
	return newArr;
}