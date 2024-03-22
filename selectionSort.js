// Selection Sort is a straightforward sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted part of the array and moving it to the sorted part.

// function to perform selection sort
function selectionSort(inputArray) {
  // Get the length of the input array
  let n = inputArray.length

  // iterate through the entire array.

  for (let i = 0; i < n; i++) {
    // Assume current element is the minimum
    let min = i

    // find the smallest number in the unsorted array.
    for (let j = i + 1; j < n; j++) {
      if (inputArray[j] < inputArray[min]) {
        min = j
      }
    }

    // If the input element isn't already in its place.
    if (min !== i) {
      // Swap the elements
      let temp = inputArray[i]
      inputArray[i] = inputArray[min]
      inputArray[min] = temp
    }
  }
  return inputArray
}

const unsrtedArray = [5, 2, 4, 6, 1, 3]
const srtdArray = selectionSort(unsrtedArray)
console.log('Sorted using selection sort:', srtdArray)
