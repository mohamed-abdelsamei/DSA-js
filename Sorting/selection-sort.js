let swap = (arr, i1, i2) => {
    [[arr[i1], arr[i2]]] = [[arr[i2], arr[i1]]]
}
module.exports = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i; j < arr.length + 1; j++) {
            if (arr[j] < arr[min]) min = j
        }
        swap(arr, i, min)
    }
    return arr
}

// complexity  n2
// loop n times