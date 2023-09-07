let output =document.querySelector(".result");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");
let res = document.querySelector(".res");

function display(num){
    output.value += num;
}
function Clear(){
    output.value="";
}
function Delete() {
    output.value =output.value.slice(0,-1);
}
function Calc(){
    try{
        output.value = eval(output.value);
    }catch(error){
        output.value = "error";
    }
}