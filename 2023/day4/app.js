addEventListener('load', async () => {
    const data = await funRead('./2023/day4/input.txt');
    funPart2(data[0]);
});



sum = 0



function funPart1(data) {
    data.forEach(y => {
        let winningNumbers = 0
        let allNumbers = y.split(/[|:]/).map(i => i.trim().split(' ').filter(j => j != ''))
        allNumbers.shift()
        allNumbers[1].forEach(x => {
            if(allNumbers[0].includes(x)) {
                winningNumbers++
            }
        })
        sum += Math.floor(2**(winningNumbers-1))
    });
    console.log(sum)
}

function funPart2(data) {
	
}