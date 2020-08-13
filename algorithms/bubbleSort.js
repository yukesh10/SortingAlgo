async function bubblesort(array){
    let arrayLength = array.length;
    let count = 0;
    for (let i = 0; i < arrayLength-1; i++){
        for (let j = 0; j < arrayLength-i; j++){
            if (array[j] > array[j+1]){
                states[j] = 1;
                states[j+1] = 2;
                await swap(array, j, j+1);
                states[j] = -1;
                states[j+1] = -1;
            }
            if (j == arrayLength-i-1){
                states[j] = 0; 
            }
        }
    }
}