addEventListener('load', async () => {
    const data = await funRead('./2023/day1/input.txt');
    funPart2(data[0]);
});

function funPart1(data) {
	sum = 0;
	data.forEach(element => {
		allNumbers = element.match(/\d/g);
		sum += (allNumbers[0] + allNumbers[allNumbers.length-1]) * 1;
	});
	console.log(sum)
}

function funPart2(data) {
	sum = 0;
	const wordsToDigits = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9'
    };

	

	data.forEach(element => {
		allNumbers = {};
		Object.keys(wordsToDigits).forEach(e => {
			allNumbers[element.indexOf(e)] = wordsToDigits[e]
			allNumbers[element.lastIndexOf(e)] = wordsToDigits[e]
		})
		delete allNumbers['-1'];
		allNumbersKeys = Object.keys(allNumbers)
		sum += (allNumbers[allNumbersKeys[0]] + allNumbers[allNumbersKeys[allNumbersKeys.length-1]]) * 1;
	});
	console.log(sum)
}