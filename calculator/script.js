const userInput = document.getElementById('userInput');
// what button user presses
var expression = '';
// expression=what the user enters

function press(num){
    expression += num; 
    userInput.value = expression;
    // so that the entered numbers show up on screen
}

function equal(){
    userInput.value = eval(expression);
    expression = '';
    // so when user enters new one, it dosent overlap with the previous expression
}

function erase(){
    expression = '';
    userInput.value = expression;
}