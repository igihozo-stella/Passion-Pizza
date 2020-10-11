//business logic
function myFunction(){
   var valueSize =document.getElementById('size').value;
    var valueCrust=document.getElementById('crust').value;
    var valueTopping=document.getElementsByClassName('checkbox').value;
    var numberOfPizza=document.getElementById('numberofpizza').value;
    var totalAmount=(parseInt(valueSize)+parseInt(valueCrust))*parseInt(numberOfPizza);
    alert("You have ordered"+" " + numberOfPizza + " pizza." + " " + " The amount to pay is " + totalAmount+ "rwf" + " Thank you for your order!");
}

function deliver(){
prompt("enter your location for delivery");
alert("Your delivery fee is 1500 rwf");
alert("Your order will be delivered in a short while");
}