
function alertValue(e){
    if(e.key === "A"){
        window.alert(`You have entered ${inp.value}`);
    }
}
function fetchValue(alertValue){
    let inp=document.getElementById("inp");
    inp.addEventListener("keydown",alertValue(e))
}
fetchValue(alertValue);