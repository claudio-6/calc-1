"use strict";
//global variables 
var num1 = "";//first number for maths 
var num2 = "";//seccond number
var operator;//stores the value for the operator 
var flag = false;// T/F boolian False if we havnt used an opp yet 
var equalTo = false;//boolian false if we havent pressed the equas sign 
var display = document.getElementById("display");
var opString = "";
//calculator 

//function 
function setValue(number){

    if(equalTo === true){
        clearButton();
    }
    if (flag === false){
        num1 += number;
        display.innerHTML = num1;
    }


if(flag === true){
    num2 += number;
    display.innerHTML = num1 + opString+ num2;
}

if(num1.length > 8 || num2.length > 8){
    display.innerHTML="Max limit of digits reached";
    alert("you cant have more than 8 numbers");
    
}
}
//funtions to clear the calc
function clearButton(){
    flag = false;
    num1 = "";
    num2 = "";
    display.innerHTML ="";
    equalTo = false;
}

//function for storing and selecting the opperator value
function setOperator(number){
    operator = number;
    
    flag = true;

    if(operator ===4){
        display.innerHTML += " / ";
        opString = " / "

    }else if(operator === 3){
        display.innerHTML += " * ";
        opString = " * ";

    }else if (operator == 2){
        display.innerHTML += " - ";
        opString = " - ";

    }else{ 
        display.innerHTML += " + ";
        opString = " + ";
    }
    //for getting rid of multiple operators 
    if(flag === true){
        display.innerHTML = num1 + opString;
    }

    if(flag === true && num1 === ""){
        clearButton();
    }
    if(equalTo === true){
        clearButton();
    }
}
//function to solve math questions 
function equalClick(){
    equalTo = true;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = "";
    var roundedResult="";

    if(operator === 1){
        result = num1 + num2; 

    }else if (operator === 2){
        result = num1 - num2;
    
    }else if (operator === 3){
        result = num1 * num2;

    }
    else{
        result = num1 / num2;
    }
    
    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;
    
    if(roundedResult === "Infinity"){
    display.innerHTML = "you cannot divide by zero";
    
    }else if(roundedResult === "NaN"){
        display.innerHTML = "invalid calculation";
    }
}
//function to delete the last digit in the display
function backspace(){
    var temp1 = "";
    var temp2 = "";
    if(equalTo === true){
        if(flag === false){
            temp1 = num1.substring(num1.length-1);
            num1 = temp1; 
            display.innerHTML = num1;
        }
        else if(flag === true){
            display.innerHTML = num1;
            flag = false ;
        }
        if (num2 !== "")
            temp2 = num2.sunstring(0, num2.length-1)
            num2 = temp2;
            flag = true;

            if(operator === 1)
            display.innerHTML = num1 + " + " + num2;
    }else if (operatopr === 2){
        display.innerHTML = num1 = " - " + num2;
    }else if (operator === 3){
        display.innerHTML = num1 + " * " + num2;
    }else {
    display.innerHTML = num1 + " / " + num2;
    }
}
    

///function for 
function setDecimal(){
    if(flag === false){
        if(num1===""){
            num1="0."
            display.innerHTML = num1;
        }
        if(num1.indexOf(".")===  -1){
            num1 += ".";
            display.innerHTML = num1;
        }
    }
    if(flag === true){
        if(num2===""){
            num2="0.";
            display.innerHTML = num2;
        }
        if(num2.indexOf(".") ===  -1){
            num2 += ".";
            display.innerHTML +=".";
        }
    }
}
// tells the calc what operator you need when missing the number 2 
function opSetString(op){
    if(operator === 1){
        display.innerHTML = num1 + " + " + num2;
    }else if (operatopr === 2){
        display.innerHTML = num1 = " - " + num2;
    }else if (operator === 3){
        display.innerHTML = num1 + " * " + num2;
    }else {
    display.innerHTML = num1 + " / " + num2;
    }
}