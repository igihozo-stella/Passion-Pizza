//business logic
function myFunction(){
   var valueSize=document.getElementById('size').value;
   var valueCrust=document.getElementById('size').value;
   var valueTopping=document.getElementsByClassName('checkbox').value;
   var numberOfPizza=document.getElementById('numberofpizza').value;
      alert(parseInt(valueSize)+ parseInt(valueCrust)*parseInt(numberOfPizza));
}
