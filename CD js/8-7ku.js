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
//n3
function checkExam(array1, array2) {
    let result = 0
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === "") {
            result += 0
        } else if (array1[i] === array2[i]) {
            result += 4
        } else if (array1[i] !== array2[i]) {
            result -= 1
        }
    }
    return result <= 0 ? 0 : result
}
//n4
function friend(friends) {
    let arr = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            arr.push(friends[i])
        }
    } return arr
}
//n5
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    return Math.floor(Math.sqrt(Math.pow(age1, 2) + Math.pow(age2, 2) + Math.pow(age3, 2) + Math.pow(age4, 2) +
        Math.pow(age5, 2) + Math.pow(age6, 2) + Math.pow(age7, 2) + Math.pow(age8, 2)) / 2)
}
//n6
function largestOfFour(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] === Math.max(...arr[i])) {
                arr1.push(arr[i][j])
            }

        }
    } return (arr1)
}
//n7
var number = function (array) {
    let answerArr = array.map((el, index) => {
        return el = `${index + 1}: ${el}`
    })

    return answerArr
}
//можна ретурн тільки в тілі map()
//n8
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
//n9
function find_average(array) {
    let va = 0
    for (el of array) {
        va += el
    }
    return array.length !== 0 ? va / array.length : 0
}
//sposob 2
function find_average(array) {
    return (Math.min(...array) + Math.max(...array)) / 2;
}
