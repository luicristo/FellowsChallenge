/*Creates array for the 3 inputs*/
numArray = [];

/*This is the main code that puts the values into ascending order*/
function ascendingArray(){      
    numArray = [];

    /*Retrieves values*/
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    z = document.getElementById("z").value;
    /*push() adds new items to the end of an array, and returns the new length. */
    numArray.push(x);
    numArray.push(y);
    numArray.push(z);

    /*Figures out the values order*/
    numArray.sort(function (a, b) {
        return a - b;
      }) 
    
    /*This section figures out whether the input is a number or not*/

    document.getElementById("Msg").innerHTML = numArray; 
    /*isNaN is a function that finds whether the value is a number. NaN stands for not a number.*/
    if(isNaN(x)){
        document.getElementById("Msg").innerHTML = "Woah! Looks like you entered a letter. Try again!";
    }

    if(isNaN(y)){
        document.getElementById("Msg").innerHTML = "Only numbers please!";
    }
    
    if(isNaN(z)){
        document.getElementById("Msg").innerHTML = "One more time! Seems like you entered a letter!";
    }
}