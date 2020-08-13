async function insertionsort(array){

    let arrayLength = array.length
    for (let i = 1; i < arrayLength; i++){
        let key = array[i];
        
        for (j = i-1; j >= 0 && array[j] > key; j--){
            states[j+1] = 0;
            states[j] = 1;
            await sleep(10);
            array[j+1] = array[j];
            await sleep(10);
            states[j+1] = -1;
            states[j] = -1;
        }
        array[j+1] = key;
    }
}