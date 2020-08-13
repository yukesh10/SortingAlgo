let startBtn = document.querySelector('.startBtn');
let resetBtn = document.querySelector('.resetBtn');
let slider = document.querySelector("#myRange");
let sliderValue = document.querySelector('.sliderValue')
let algo = document.querySelector("#algo");
let worstValue = document.querySelector("#worstValue");
let averageValue = document.querySelector("#averageValue");
let bestValue = document.querySelector("#bestValue");
let spaceValue = document.querySelector("#spaceValue");
let stableValue = document.querySelector("#stableValue");

sliderValue.innerHTML = slider.value;

let values = []
var w = slider.value;

let states = []
let done = false

let customWidth = window.innerWidth;
let customHeight = window.innerHeight;

function setup(){
    createCanvas(customWidth, customHeight/2.2);
    resetSketch();

    algo.addEventListener("click", function(){
        startBtn.innerHTML = "Visualize " + algo.value
        if (algo.value === "QuickSort"){
            console.log("quick")
            worstValue.innerHTML = 'n<sup>2</sup>';
            averageValue.innerHTML = 'n * log(n)';
            bestValue.innerHTML = 'n * log(n)';
            spaceValue.innerHTML = '1';
            stableValue.innerText = 'No';
        }
        else if (algo.value === "MergeSort"){
            console.log("merge")
            worstValue.innerText= 'n * log(n)';
            averageValue.innerHTML = 'n * log(n)';
            bestValue.innerHTML = 'n * log(n)';
            spaceValue.innerHTML = 'n';
            stableValue.innerText = 'Yes';

        }
        else if (algo.value === "BubbleSort"){
            console.log("bubble")
            worstValue.innerHTML = 'n<sup>2</sup>';
            averageValue.innerHTML = 'n<sup>2</sup>';
            bestValue.innerHTML = 'n';
            spaceValue.innerHTML = '1';
            stableValue.innerText = 'Yes';
        }
        else if (algo.value === "SelectionSort"){
            console.log("select")
            worstValue.innerHTML = 'n<sup>2</sup>';
            averageValue.innerHTML = 'n<sup>2</sup>';
            bestValue.innerHTML = 'n<sup>2</sup>';
            spaceValue.innerHTML = '1';
            stableValue.innerText = 'No';
        }
        else if (algo.value === "HeapSort"){
            console.log("heap")
            worstValue.innerText= 'n * log(n)';
            averageValue.innerHTML = 'n * log(n)';
            bestValue.innerHTML = 'n * log(n)';
            spaceValue.innerHTML = '1';
            stableValue.innerText = 'No';
        }
        else if (algo.value === "InsertionSort"){
            console.log("insert")
            worstValue.innerHTML = 'n<sup>2</sup>';
            averageValue.innerHTML = 'n<sup>2</sup>';
            bestValue.innerHTML = 'n';
            spaceValue.innerHTML = '1';
            stableValue.innerText = 'Yes';
        }
    })

    startBtn.addEventListener("click", async function(){
        if (done){
            resetSketch();
        }
        if (algo.value === "QuickSort"){
            await quicksort(values, 0, values.length-1);
        }
        else if (algo.value === "MergeSort"){
            // work on merge sort
            await mergesort(values, 0, values.length-1);
        }
        else if (algo.value === "BubbleSort"){
            // work on bubble sort
            await bubblesort(values);
        }
        else if (algo.value === "SelectionSort"){
            // work on selection sort
            await selectionsort(values);
        }
        else if (algo.value === "HeapSort"){
            // work on heap sort
            await heapsort(values);
        }
        else if (algo.value === "InsertionSort"){
            // work on insert sort
            await insertionsort(values);
        }
        for (let i = 0; i < values.length; i++){
            states[i] = 2;
            done = true;
        }
    });
    resetBtn.addEventListener("click", function(){
        resetSketch();
    })

    slider.oninput = function(){
        sliderValue.innerHTML = this.value;
        w = slider.value;
        resetSketch();
    }
}

function resetSketch(){
    values = new Array(floor(width/ w));
    for (let i = 0; i < values.length; i++){
        values[i] = random(height);
        states[i] = -1;
    }
    done = false;
}

function draw(){
    // if (done){
        background("#719288");
    // }
    // else{
        // background("#bf8302");
    // }
    for (let i = 0; i < values.length; i++){
        if (states[i] == 0){
            fill("#E0777D");
        }
        else if (states[i] == 1){
            fill("#D6FFB7");
        }
        else if (states[i] == 2){
            fill("#bcc944");
        }
        else{
            fill("#fff"); 
        }
        rect(i*w, height-values[i], w, values[i]);
    }
}


async function swap(array, a, b){
    await sleep(20);
    [array[a], array[b]] = [array[b], array[a]];
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}