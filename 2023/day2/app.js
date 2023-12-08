addEventListener('load', async () => {
    const data = await funRead('./2023/day2/input.txt');
    funPart2(data[0]);
});



sum = 0;



function funPart1(data) {
	bag = {
		red: 12,
		green: 13,
		blue: 14
	};
	data.forEach((element, index) => {
		allNumbers = element.split(':')[1].split(/[,;]/).map(x => x.trim().split(' '));
		for(let i = 0; i != allNumbers.length; i++) {
			if(bag[allNumbers[i][1]] < allNumbers[i][0]*1) {
				break
			} else if(i == allNumbers.length-1) {
				sum += index+1;
			}
		}
	});
	console.log('sum', sum)
}

function funPart2(data) {
	data.forEach(element => {
		bag = {
			red: 0,
			green: 0,
			blue: 0
		};
		allNumbers = element.split(':')[1].split(/[,;]/).map(x => x.trim().split(' '));

		allNumbers.forEach(e => {
			bag[e[1]] = Math.max(e[0]*1, bag[e[1]]);
		})
		sum += bag.red * bag.green * bag.blue;
		bag.red = 0;
		bag.green = 0;
		bag.blue = 0;
	});
	console.log('sum', sum);
}