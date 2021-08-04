var operator = null;
var  inputValueMemo=0;

function getContentClick(event){
    const value= event.target.innerHTML;
    filterAction(value);
}

const filterAction = value =>{
   value==="0" ? addNumberInput(0) : null;
   value==="1" ? addNumberInput(1) : null;
   value==="2" ? addNumberInput(2) : null;
   value==="3" ? addNumberInput(3) : null;
   value==="4" ? addNumberInput(4) : null;
   value==="5" ? addNumberInput(5) : null;
   value==="6" ? addNumberInput(6) : null;
   value==="7" ? addNumberInput(7) : null;
   value==="8" ? addNumberInput(8) : null;
   value==="9" ? addNumberInput(9) : null;
   value==="," ? addNumberInput(',') : null;

   value==="+" ? setOperation('+') : null;
   value==="-" ? setOperation('-') : null;
   value==="X" ? setOperation('*') : null;
   value==="/" ? setOperation('/') : null;
   value==="%" ? setOperation('%') : null;
   value==="+/-" ? setOperation('+/-') : null;

   value === "=" ? calculation() : null;
   value === "AC"? resetCalculator() : null;

}
function addNumberInput(value){
    const inputScreen= document.getElementsByClassName('calculator_screen')[0];
    const inputValue=inputScreen.value;

    if(inputValue === "0" && inputValue.length === 1 && value !== "," ){
        inputScreen.value=value;
        return;
    }

    if(inputScreen.value === "" && value === ","){
        inputScreen.value = 0+value;
        return;
    }
    inputScreen.value= inputValue + value;
}

// ************* función para guardar la operación selecciona ******************

function setOperation (operator){
    const inputScreenValue = document.getElementsByClassName("calculator_screen")[0];
    this.operator= operator;
    
    if(inputScreenValue != 0){
        calculation();
    }
    
}
function calculation(){
    const inputScreen = document.getElementsByClassName("calculator_screen")[0];
    let valueOne = trasformCommaToPoint(this.inputValueMemo);
    let valueTwo= trasformCommaToPoint(inputScreen.value);
     
    let total =0
    // ********* operacion de suma *********************
    if(this.operator==="+" && inputScreen.value !== ""){
        total= valueOne + valueTwo;     
    }

    // ********* operacion de resta ********************
    if(this.operator==="-" && inputScreen.value !==""){
        if(valueOne !== 0){
            total= valueOne - valueTwo;
        }else {
            total = valueTwo;
        }
    }

    // ********** operacion multiplicacion ****************
    if(this.operator==="*" && inputScreen.value !==""){
        if(valueOne !== 0){
            total= valueOne * valueTwo;
        }else {
            total = valueTwo;
        }
    }
    // ************ operacion de la division **************
    if(this.operator==="/" && inputScreen.value !==""){
        if(valueOne !== 0){
            total= valueOne / valueTwo;
        }else {
            total = valueTwo;
        }
    }

    // *********** operacion porcentaje *********************
    if(this.operator==="%" && inputScreen.value !== ""){
        total= valueTwo /100;
    }

    // ********** numeros de positivo a negativo  e inversa ****************
    if(this.operator==="+/-" && inputScreen.value !== ""){
        if(valueTwo > 0){
            total=-valueTwo;
        }
    }
    total= trasformPointToComma(total);
    this.inputValueMemo= total;
    inputScreen.value= "";
    inputScreen.placeholder= total;
}


// ***************** funcion para trasformar la coma en punto *****************
function trasformCommaToPoint(value){
    if(typeof value !== "number"){
        let resultTrasform = value.replace(',', '.');
        return parseFloat(resultTrasform);
    }
    return value;
}
// ************** funcion para trasformar el punto en coma *************************
function trasformPointToComma(value){
    let resultTrasform = value.toString();
    resultTrasform = resultTrasform.replace('.',',');
    return resultTrasform;
}

// *************** Funcion para el boton de limpiar *********************
const resetCalculator =() =>{
    const inputScreen = document.getElementsByClassName("calculator_screen")[0];
    inputScreen.value = 0;
    this.inputValueMemo =0;
    this.operator=null;
}