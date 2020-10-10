// good for small arrays
// complexity n2
// got to get smallest or largest elements
// sort in place, no more memory needed
// smart , stop when array is sorted 
// stop when loop without swapping
// not good for big n
let swap = (arr, i1, i2) => {
    [[arr[i1], arr[i2]]] = [[arr[i2], arr[i1]]]
}
module.exports = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        let swaps = 0
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1)
                swaps++
            }
        }
        if (swaps == 0) break
    }
    return arr
}