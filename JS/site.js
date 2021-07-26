//get values from user input
//starts or controller function
function getValues(){
    let abraValue = document.getElementById("startValue").value;
    let cadabraValue = document.getElementById("endValue").value;

    //validate input to make sure that input is numbers
    //parse input for integers
    abraValue = parseInt(abraValue);
    cadabraValue = parseInt(cadabraValue);

    if(Number.isInteger(abraValue) && Number.isInteger(cadabraValue)) {
        //call abracadabra
        let acArray = abraCadabraC(abraValue,cadabraValue);
        //call displayData and write the values to the screen
        displayData(acArray);
    } else {
        alert("You must enter integers")
    }
}



function abraCadabra(abraValue,cadabraValue) {

    let returnArray = [];

    //loop from 1 to 100
    for (let index = 1; index <= 100; index++) {
        //need to check current integer in three steps
        //(1) Check to see if divisible by both (3 and 5); if so, push Abracadabra.
        if (index % abraValue == 0 && index % cadabraValue == 0) {
            returnArray.push("Abracadabra");
            }
        //(2) Check to see if divisible by abra value (3); if so, push Abra.
        else if (index % abraValue == 0) {
            returnArray.push("Abra");
            }
        //(3) Check to see if divisible by cadabra value (5); if so, push Cadabra.
        else if (index % cadabraValue == 0) {
            returnArray.push("cadabra");
            }
        //if divisible by none, push the number into the array
        else {
            returnArray.push(index);
            }
    }
    return returnArray;
}

function abraCadabraB(abraValue, cadabraValue){

    let returnArray = [];
    let Abra = false;
    let Cadabra = false;

    for (let i = 1; i < 100; i++) {
        
        Abra = i % abraValue == 0;
        Cadabra = i % cadabraValue == 0;

        switch(true)
        {
            case Abra && Cadabra:{
                returnArray.push('Abracadabra');
                break;
            }
            case Abra:{
                returnArray.push('Abra');
                break;
            }
            case Cadabra:{
                returnArray.push('Cadabra');
                break;
            }
            default:{
                returnArray.push(i);
                break;
            }
        }
    }

    return returnArray;
}

function abraCadabraC(abraValue, cadabraValue){
    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        let value = ((i % abraValue == 0 ? 'Abra' : '') + (i % cadabraValue == 0 ? 'cadabra' : '') || i );
        returnArray.push(value);
    }
    return returnArray;
}

//loop over the array and create a tablerow for each item
function displayData(acArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template itself
    let templateRow = document.getElementById("fbTemplate");

    //clear the table
    tableBody.innerHTML = "";

    for (let index = 0; index < acArray.length; index+= 5) {
        let tableRow = document.importNode(templateRow.content, true);
        
        //grab the td to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(acArray[index]);
        rowCols[0].textContent = acArray[index];

        rowCols[1].classList.add(acArray[index+1]);
        rowCols[1].textContent = acArray[index+1];

        rowCols[2].classList.add(acArray[index+2]);
        rowCols[2].textContent = acArray[index+2];

        rowCols[3].classList.add(acArray[index+3]);
        rowCols[3].textContent = acArray[index+3];

        rowCols[4].classList.add(acArray[index+4]);
        rowCols[4].textContent = acArray[index+4];

        tableBody.appendChild(tableRow);
    }

    //add all the rows to the table
}