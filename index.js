function randomGenerator(){
    return Math.floor(Math.random()*6)+1;
}
function changeDie1(num){
    switch(num){
        case 1:{
            document.querySelector("#dice1 img").setAttribute("src", "img/die1.png");
        }break;
        case 2:{
            document.querySelector("#dice1 img").setAttribute("src", "img/die2.png");
        }break;
        case 3:{
            document.querySelector("#dice1 img").setAttribute("src", "img/die3.png");
        }break;
        case 4:{
            document.querySelector("#dice1 img").setAttribute("src", "img/die4.png");
        }break;
        case 5:{
            document.querySelector("#dice1 img").setAttribute("src", "img/die5.png");
        }break;
        case 6:{
            document.querySelector("#dice1 img").setAttribute("src", "img/die6.png");
        }break;
    }
}
function changeDie2(num){
   switch(num){
        case 1:{
            document.querySelector("#dice2 img").setAttribute("src", "img/die1.png");
        }break;
        case 2:{
            document.querySelector("#dice2 img").setAttribute("src", "img/die2.png");
        }break;
        case 3:{
            document.querySelector("#dice2 img").setAttribute("src", "img/die3.png");
        }break;
        case 4:{
            document.querySelector("#dice2 img").setAttribute("src", "img/die4.png");
        }break;
        case 5:{
            document.querySelector("#dice2 img").setAttribute("src", "img/die5.png");
        }break;
        case 6:{
            document.querySelector("#dice2 img").setAttribute("src", "img/die6.png");
        }break;
    }
}
function displayResult(num1,num2){
    var result;
    if(num1>num2){
        result="Player 1 won";
    }
    else if(num2>num1){
        result="Player 2 won";
    }
    else{
        result="Draw";
    }
    document.querySelector("#result").textContent="Result: "+result;
}
function clickButton(){
    var num1=randomGenerator();
    var num2=randomGenerator();
    changeDie1(num1);
    changeDie2(num2);
    displayResult(num1,num2);
}