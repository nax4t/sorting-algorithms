// Quick sort is a divide-and-conquer sorting algorithm that efficiently sorts an array by selecting a pivot element, partitioning the array into two subarrays (one with elements smaller than the pivot and the other with elements larger), and then recursively sorting the subarrays until the entire array is sorted.
function quickSort(arr) {
  // Base case: if the array has 1 or 0 elements it's already sorted
  if (arr.length <= 1) {
    return arr
  }
  // choose the first element as pivot
  let pivot = arr[0]

  // initialize left and right subarrays
  let leftArray = []
  let rightArray = []

  // iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i])
    } else {
      rightArray.push(arr[i])
    }
  }

  // Recursivly sort the left and right subarrays
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

const nonsorted = [8, 3, 6, 7, 4, 1]
const srtedarraydar = quickSort(nonsorted)

console.log(`Sorted using quick sort: ${srtedarraydar}`)
