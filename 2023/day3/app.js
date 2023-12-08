addEventListener('load', async () => {
    const data = await funRead('./2023/day3/input.txt');
    funPart2(data[0]);
});

sum = 0

function funPart1(data) {
    function get(y, x, [dy, dx]) {
        str = data[y + dy]
        if(str) {
            return str[x + dx]
        }
    }
    function isStrANumber(str) {
        return !isNaN(parseInt(str))
    }
    function isStrADot(str) {
        return str === '.'
    }


    cords = [
        [-1,-1], [-1, 0], [-1, 1],
        [ 0,-1],          [ 0, 1],
        [ 1,-1], [ 1, 0], [ 1, 1],
    ]


    data.forEach((row, y) => {
        let isNumber = false
        let currentNumber = ''
        let check = true
        for(let x = 0; x != row.length; x++) {
            isNumber = isStrANumber(get(y, x, [0, 0]))

            if(!isNumber && !check) {
                sum += parseInt(currentNumber)
            }

            if(!isNumber) {
                currentNumber = ''
                check = true
            }
            
            if(isNumber && check) {
                let is = false
                cords.forEach(cord => {
                    str = get(y, x, [cord[0], cord[1]])
                    is = is || !isStrADot(str) && !isStrANumber(str) && str !== undefined
                })
                if(is) {
                    check = false
                }
            }

            if(isNumber) {
                currentNumber += get(y, x, [0, 0])
            }
        }

        if(isNumber && !check) {
            sum += parseInt(currentNumber)
        }
    });

    console.log(sum)
}

function funPart2(data) {
	
}