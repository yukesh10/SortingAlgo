async function quicksort(array, start, end){
    if (start >= end){
        return;
    }
    let index = await partition(array, start, end);
    states[index] = -1;

    await Promise.all([
        // sort the left side recursively
        quicksort(array, start, index-1),
        // sort the right side recursively
        quicksort(array, index+1, end)
    ]);
    
}

async function partition(array, start, end){
    for (let i = start; i < end; i++){
        states[i] = 1;
    }
    let pivotValue = array[end];
    let pivotIndex = start;
    states[pivotIndex] = 0;
    for (let i = start; i < end; i++){
        if (array[i] < pivotValue){
            await swap(array, i, pivotIndex);
            states[pivotIndex] = -1;
            pivotIndex++;
            states[pivotIndex] = 0;
        }
    }
    await swap(array, pivotIndex, end);
    for (let i = start; i < end; i++){
        if (i != pivotIndex){
            states[i] = -1;
        }
    }
    return pivotIndex;
}