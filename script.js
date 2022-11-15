

function SumNb(){
    let nb1=parseInt(document.getElementById("fn").value);
    let nb2=parseInt(document.getElementById("sn").value);
    let sum=nb1+nb2;
    document.getElementById("result").innerHTML="The result is "+sum;
}

function SubNb(){
     let nb1=parseInt(document.getElementById("fn").value);
    let nb2=parseInt(document.getElementById("sn").value);
    let sub=nb1-nb2;
    document.getElementById("result").innerHTML="The result is "+sub;
}


function MulNb(){
    let nb1=document.getElementById("fn").value;
    let nb2=document.getElementById("sn").value;
    let mlt=nb1*nb2;
    document.getElementById("result").innerHTML="The result is "+mlt;
}


function DivNb(){
    let nb1=document.getElementById("fn").value;
    let nb2=document.getElementById("sn").value;
    let div=nb1/nb2;
    document.getElementById("result").innerHTML="The result is "+div;
}