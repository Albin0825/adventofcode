addEventListener('load', async () => {
    const data = await funRead('./2023/day5/input.txt');
    funPart1(data[0]);
});



let sum = 0;



function funPart1(data) {
    let seeds = [];
    let formatedData = [];
    let lowestNumber = Infinity;
	data.forEach(y => {
        if(y.includes(':')) {
            if(y.split(':')[1] != '') {
                seeds = y.split(':')[1].trim().split(' ').map(x => x*1);
            } else {
                formatedData.push([]);
            }
        } else if(y != '') {
            let formattedRow = y.split(' ').map(x => x*1);
            let [start, end, diff] = formattedRow;
            let dif =  formattedRow[0] - formattedRow[1];
            console.log(diff, dif)
            formatedData[formatedData.length-1].push([
                formattedRow[2],
                formattedRow[1],
                dif
            ]);
        }
    });
    seeds.forEach(y => {
        recursion(0, y);
    })
    function recursion(i, num) {
        let check = true;
        console.log(`${i / (formatedData.length-1) * 100}%`);
        formatedData[i].forEach(y => {
            for(let j = 0; j != y[0]; j++) {
                if(y[1]+j === num) {
                    if(formatedData[i + 1]) {
                        recursion(++i, num+y[2]); // if num is listed in the file
                    } else {
                        console.log('current number', num+y[2]);
                        lowestNumber = Math.min(num+y[2], lowestNumber);
                    }
                    check = false;
                }
            }
        })
        if(check) {
            if(formatedData[i + 1]) {
                recursion(++i, num); // if num is not listed in the file
            } else {
                console.log('current number', num);
                lowestNumber = Math.min(num, lowestNumber);
            }
        }
    }
    console.log('lowestNumber', lowestNumber);
}

function funPart2(data) {
	
}