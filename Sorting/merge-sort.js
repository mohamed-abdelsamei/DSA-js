function merge(arr1, arr2) {
    let results = []
    let i = 0
    let j = 0

    while (i <= arr1.length - 1 && j <= arr2.length - 1) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++
        }
        else {
            results.push(arr2[j])
            j++
        }
    }

    while (i <= arr1.length - 1) {
        results.push(arr1[i])
        i++
    }
    while (j <= arr2.length - 1) {

        results.push(arr2[j])
        j++
    }

    return results
}


function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let middle = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))
    return merge(left, right)
}

module.exports = (arr) => mergeSort(arr)