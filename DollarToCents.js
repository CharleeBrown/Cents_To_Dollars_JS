
  var putDimes = document.getElementById("dime");
  var putQtr = document.getElementById("qtr");
  var putNickel = document.getElementById("nickel");
  var putPenny = document.getElementById("penny");
  function getCents(){
    console.clear();
    var dollar = document.getElementById("dollarAmount");
    var dollars = parseFloat(dollar.value);
   if(!dollars>0 )
   {
        alert("No Dollar amount Entered");
        dollar.focus();
   }
   else{
    var cents = dollars * 100;
    
    var dimes = Math.round(cents / 10);
    var nickles = Math.round(cents / 5);
    var quarters = Math.round(cents / 25);
    var pennies = Math.round(cents);
    
    

    putDimes.value = dimes; 
    putQtr.value = quarters;
    putNickel.value = nickles; 
    putPenny.value = pennies; 

    console.log(dimes + " dimes");
    console.log(nickles + " nickles");
    console.log(quarters + " Quarters");
    console.log(pennies + " pennies");
   

    
   }
   
}

function getClear(){
  
    
    document.getElementById("dollarAmount").value = "";
    putDimes.value = "";
    putQtr.value = "";
    putNickel.value = "";
    putPenny.value = "";
}



