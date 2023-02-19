function stray(numbers){
    let abb = [];
    for (i = 0; numbers.length > i; i++) {
        if (numbers[i] === Math.min(...numbers)) {
            abb.push(numbers[i])
        }
    }
    return abb.length === 1 ? Math.min(...numbers) : Math.max(...numbers)
}