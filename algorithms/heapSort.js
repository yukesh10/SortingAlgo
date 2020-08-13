async function heapsort(array) {
    let arrayLength = array.length;

    for (let i = Math.floor(arrayLength / 2 - 1); i >= 0; i--) {
        await heapify(array, arrayLength, i);
    }

    for (let i = arrayLength - 1; i > 0; i--) {
        // move current root to the end
        await swap(array, 0, i);
        states[i] = 2;
        // heapify the reduced heap
        await heapify(array, i, 0);
    }
}

async function heapify(array, heapHeight, index) {
    let largestValueIndex = index;
    let left = 2 * index + 1;
    let right = left + 1;

    if (left < heapHeight && array[left] > array[largestValueIndex]) {
        largestValueIndex = left;
    }

    if (right < heapHeight && array[right] > array[largestValueIndex]) {
        largestValueIndex = right;
    }

    // if largest is not root
    // then make the largest value => root
    if (largestValueIndex != index) {
        states[largestValueIndex] = 0;
        states[index] = 1;
        await swap(array, index, largestValueIndex);
        states[index] = -1;
        states[largestValueIndex] = -1;
        // recursively heapify the affected sub-tree
        await heapify(array, heapHeight, largestValueIndex);
    }

    return array;
}