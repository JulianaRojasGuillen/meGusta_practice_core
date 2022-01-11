counter=3;
function AddLike(){
    counter++
    updateDisplay(counter);
}

function updateDisplay(val){
    document.querySelector(".numberLikes").innerHTML=val
}