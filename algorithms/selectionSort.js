async function selectionsort(array){
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength-1; i++){
        // let minValue = array[i];
        let minValueIndex = i;
        for (let j = i+1; j < arrayLength; j++){
            if (array[j] < array[minValueIndex]){
                minValueIndex = j;
            }
        }
        states[i] = 1;
        states[minValueIndex] = 2;
        // await sleep(500);
        await swap(array, i, minValueIndex);
        states[i] = 0;
        states[minValueIndex] = -1;
    }
}