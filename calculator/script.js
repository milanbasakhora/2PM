const display = document.getElementById("myDisplay");


function appendToDisplay(valueComingFromButton){
    display.value = display.value + valueComingFromButton;
}


function calculateResult(){
    try{
        display.value = eval(display.value); 
    }
    catch(e){
        display.value = "Errory"; 
    }
}


function clearDisplay(){
    display.value = "";
}