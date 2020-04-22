// These variables will be constant in the document. 
//  So i placed them outside the function. 

  var putDimes = document.getElementById("dime");
  var putQtr = document.getElementById("qtr");
  var putNickel = document.getElementById("nickel");
  var putPenny = document.getElementById("penny");


  function getCents(){
    // Clears the console from the previous run. 
    console.clear();

    // Sets the variable for the dollar entry. 
    var dollar = document.getElementById("dollarAmount");

    //Converts the string to a floating number. 
    var dollars = parseFloat(dollar.value);
    

    //If the dollar amount is not greater than 0.
   if(!dollars>0 )
   {
       // Create a message box that there was no dollar amount entered. 
        alert("No Dollar amount Entered");
        dollar.focus();
   }
   else
   {
    //Creates a whole integer for the dollar amount in case there are cents. 
    var cents = dollars * 100;
    
    //Divides by each type to get the number of that coin.
    var dimes = Math.round(cents / 10);
    var nickles = Math.round(cents / 5);
    var quarters = Math.round(cents / 25);
    var pennies = Math.round(cents);
    
    
    // Places the values in the assigned text boxes. 
    putDimes.value = dimes; 
    putQtr.value = quarters;
    putNickel.value = nickles; 
    putPenny.value = pennies; 

    // Logs the amounts in the console to double verify. 
    console.log(dimes + " dimes");
    console.log(nickles + " nickles");
    console.log(quarters + " Quarters");
    console.log(pennies + " pennies");
   

    
   }
   
}

function getClear(){
  
    // Clears all the input boxes. 
    document.getElementById("dollarAmount").value = "";
    putDimes.value = "";
    putQtr.value = "";
    putNickel.value = "";
    putPenny.value = "";
}



