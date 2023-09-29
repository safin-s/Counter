let click = 0;

document.getElementById("min").onclick=function(){
    click--;
    document.getElementById("zero").innerHTML=click;
    if (click<0){
        document.getElementById("zero").style.color="red";
    }
    else if (click==0){
    document.getElementById("zero").style.color="black";
}
}

document.getElementById("sum").onclick=function(){
    click++;
    document.getElementById("zero").innerHTML=click;
    if (click>0){
        document.getElementById("zero").style.color="green";
    }
    else if (click==0){
    document.getElementById("zero").style.color="black";
}
}

document.getElementById("set").onclick=function(){
    click=0;
    document.getElementById("zero").innerHTML=click;
    document.getElementById("zero").style.color="black";
}
