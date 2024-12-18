
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let sumWater=document.getElementById("sum")


let count = 0
let totalSum = 0;




function increment() {
    
    count += 1;
    countEl.textContent = count;
    
}


function save() {
    let countStr = count + " - ";
    totalSum += count;
    sumWater.textContent="sum:" + totalSum;
    
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
console.log(typeof count)


