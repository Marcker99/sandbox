function high(str) {
    let arr = str.split(' ')
    let alphabet = "0abcdefghijklmnopqrstuvwxyz"
    let alphabetArr = alphabet.split('')
    let a = []
    for (let i = 0; i < arr.length; i++) {
        let b = 0
        for (let j = 0; j < arr[i].length; j++) {
            b += alphabetArr.indexOf(arr[i].split('')[j])
        }
        a[i] = b
    }
    return arr[a.indexOf(Math.max(...a))]  //кожна буква має певну кількість балів(згідно алфавіту), повернути підстроку(слово)з найбільшою кількістю
}
