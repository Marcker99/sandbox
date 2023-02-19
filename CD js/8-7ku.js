//N1
function stray(numbers) {
    let abb = [];
    for (i = 0; numbers.length > i; i++) {
        if (numbers[i] === Math.min(...numbers)) {
            abb.push(numbers[i])
        }
    }
    return abb.length === 1 ? Math.min(...numbers) : Math.max(...numbers)
}
//n2
function countSheeps(arrayOfSheep) {
    const answerArray = arrayOfSheep.filter(el => el === true)

    return answerArray.length
}