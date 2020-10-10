
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
    }
    let pivot = arr[start]
    let swapIndex = start
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, swapIndex, start)
    return swapIndex
}

function QuickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let p = pivot(arr, left, right)
        QuickSort(arr, left, p - 1)
        QuickSort(arr, p + 1, right)
    }
    return arr
}

module.exports = (arr) => QuickSort(arr)

