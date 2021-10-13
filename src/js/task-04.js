const refs = {
    counter: document.querySelector('#counter'),
    decrementBtn: counter.firstElementChild,
    incrementBtn: counter.lastElementChild,
    value: document.querySelector('#value'),
}

let counterValue = 0;

refs.decrementBtn.addEventListener("click", onTargetBtnDecrement); 
refs.incrementBtn.addEventListener("click", onTargetBtnIncrement);


function onTargetBtnDecrement(){
   counterValue -= 1;
   refs.value.textContent = counterValue;
}

function onTargetBtnIncrement(){
    counterValue += 1;
    refs.value.textContent = counterValue;
}



