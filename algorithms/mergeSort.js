async function mergesort(array, left, right){
    if (left >= right){
        return;
    }
    let middle = Math.floor((left + right) / 2);
    await Promise.all([
        mergesort(array, left, middle),
        mergesort(array, middle+1, right)
    ]);
    await merge(array, left, middle, right);
}

async function merge(array, left, middle, right){
    let leftArrayLength = middle - left + 1;
    let rightArrayLength = right - middle;

    let arrayLeft = new Array(leftArrayLength);
    let arrayRight = new Array(rightArrayLength);

    for (let i = 0; i < leftArrayLength; i++){
        arrayLeft[i] = array[left+i];
        states[left+i] = 0;
    }
    for (let j = 0; j < rightArrayLength; j++){
        arrayRight[j] = array[middle+1+j];
        states[middle+1+j] = 1;
    }

    let i = 0, j = 0, k = left;
    while (i < leftArrayLength && j < rightArrayLength){
        await sleep(100);
        if (arrayLeft[i] <= arrayRight[j]){
            array[k] = arrayLeft[i++]; 
        }
        else{
            array[k] = arrayRight[j++];
        }
        k++;
    }

    while (i < leftArrayLength){
        array[k++] = arrayLeft[i++];
        states[k] = -1;
    }
    while (j < rightArrayLength){
        array[k++] = arrayRight[j++];
        states[k] = -1;
    }
}