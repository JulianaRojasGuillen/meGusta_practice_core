let counter=[9,12,9];
function AddLike(val){
    counter[val]=counter[val]+1;
    updateDisplay(val);
}

function updateDisplay(val){
    document.querySelectorAll(".numberLikes")[val].innerHTML=counter[val];
}