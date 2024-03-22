function bubbleSort(arr) {
  let len = arr.length
  let swapped

  do {
    swapped = false

    for (let i = 0; i < len - 1; i++) {
      // swap elements
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
    len--
  } while (swapped)

  return arr
}

const array = [64, 74, 89, 3, 6, 90, 1]
console.log(`Array is sorted using bubble sort: ${bubbleSort(array)}`)
