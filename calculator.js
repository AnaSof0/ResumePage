let first;
let second;


function addition() {
    first= document.getElementById("first").value;
    second= document.getElementById("second").value;
    first=Number(first);
    second=Number(second);
    console.log(first);
    console.log(second);
    if (isNaN(first) || isNaN(second)){
        document.getElementById("result").innerHTML=`<h2>Please enter numbers!</h2>`
    }
    else{
        let answer=first+second;
        if (answer<0){
            document.getElementById("result").style.color="red";
        }
        else{
            document.getElementById("result").style.color="white";
        }
        document.getElementById("result").innerHTML=`<h1>${answer}</h1>`
    }
    
}
function subtract(){
    first= document.getElementById("first").value;
    second= document.getElementById("second").value;
    first=Number(first);
    second=Number(second);
    console.log(first);
    console.log(second);
    if (isNaN(first) || isNaN(second)){
        document.getElementById("result").innerHTML=`<h2>Please enter numbers!</h2>`
    }
    else{
        let answer=first-second;
        if (answer<0){
            document.getElementById("result").style.color="red";
        }
        else{
            document.getElementById("result").style.color="white";
        }
        document.getElementById("result").innerHTML=`<h1>${answer}</h1>`
    }
    
}
function multiply(){
    first= document.getElementById("first").value;
    second= document.getElementById("second").value;
    first=Number(first);
    second=Number(second);
    console.log(first);
    console.log(second);
    if (isNaN(first) || isNaN(second)){
        document.getElementById("result").innerHTML=`<h2>Please enter numbers!</h2>`
    }
    else{
        let answer=first*second;
        if (answer<0){
            document.getElementById("result").style.color="red";
        }
        else{
            document.getElementById("result").style.color="white";
        }
        document.getElementById("result").innerHTML=`<h1>${answer}</h1>`
    }
    
}
function divide(){
    first= document.getElementById("first").value;
    second= document.getElementById("second").value;
    first=Number(first);
    second=Number(second);
    console.log(first);
    console.log(second);
    if (isNaN(first) || isNaN(second)){
        document.getElementById("result").innerHTML=`<h2>Please enter numbers!</h2>`
    }
    else{
        let answer=first/second;
        if (answer<0){
            document.getElementById("result").style.color="red";
        }
        else{
            document.getElementById("result").style.color="white";
        }
        document.getElementById("result").innerHTML=`<h1>${answer}</h1>`
    }
    
}
function power(){
    first= document.getElementById("first").value;
    second= document.getElementById("second").value;
    first=Number(first);
    second=Number(second);
    console.log(first);
    console.log(second);
    if (isNaN(first) || isNaN(second)){
        document.getElementById("result").innerHTML=`<h2>Please enter numbers!</h2>`
    }
    let answer=1;
    for (let i =0; i<second;i++){
        answer=first*answer;
    }
    if (answer<0){
        document.getElementById("result").style.color="red";
    }
    else{
        document.getElementById("result").style.color="white";
    }
    document.getElementById("result").innerHTML=`<h1>${answer}</h1>`

}

function clearr(){
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("result").innerHTML = "";


}
