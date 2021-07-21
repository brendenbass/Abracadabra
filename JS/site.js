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
        //call abracadabra
        let acArray = Abracadabra(abraValue,cadabraValue);
        //call displayData and write the values to the screen
        displayData(acArray);
    } else {
        alert("You must enter integers")
    }
}

function abraCadabra(abraValue,cadabraValue) {

    let returnArray = [];

    //loop from 1 to 100
    for (let index = 0; index <= 100; index++) {
        //need to check current integer in three steps
        //(1) Check to see if divisible by both (3 and 5); if so, push Abracadabra.
        if (index % abraValue == 0 && index % cadabraValue == 0) {
            returnArray.push("Abracadabra!");
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
    returnArray;
}

//loop over the array and create a tablerow for each item
function displayData(acArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template itself
    let tableRow = document.getElementById("fbTemplate");

    //clear the table
    tableBody.innerHTML = "";

    for (let index = 0; index < acArray.length; index++) {
        let tableRow = document.importNode(templateRow.content, true);
        
        //grab the td to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = acData[i];
    }

    //add all the rows to the table
}