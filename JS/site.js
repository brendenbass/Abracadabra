//get values from user input
//starts or controller function
function getValues(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //validate input to make sure that input is numbers
    //parse input for integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers")
    }
}

function abraCadabra(abraValue,cadabraValue) {

    let returnArray = [];

    //loop from 1 to 100
    for (let index = 0; index <= 100; index++) {
        if (index % abraValue == 0 && index % cadabraValue == 0) {
            returnArray.push("Abracadabra!");
        }
        else (index % abraValue == 0) {
        returnArray.push("Abra");
        }
        else (index % cadabraValue == 0) {
            
        }
    }

    //need to check current integer in three steps
    //(1) Check to see if divisible by both (3 and 5); if so, push Abracadabra.

    //(2) Check to see if divisible by abra value (3); if so, push Abra.

    //(3) Check to see if divisible by cadabra value (5); if so, push Cadabra.

    //if divisible by none, push the number into the array

    returnArray;
}