//user interface logic
function myFunction(){
    var valueSize =document.getElementById('size').value;
    var valueCrust =document.getElementById('crust').value;
    alert(parseInt(valueSize)+ parseInt(valueCrust));
}
/*function getNumberOfPizza() {
    var selectedNumberOfPizza = document.getElementById("numberofpizza").value;
    return parseInt(selectedNumberOfPizza);
}
function calcTotalAmount() {
    var totalAmount = (getSizeValue() + getCrust() + getTopping()) * getNumberOfPizza();
    alert("You have Ordered" + getNumberOfPizza("")  +  " pizza."  +  ""  +  " The Total Amount is "  +  (totalAmount)  +  "rwf"  +  " Thank you for your order welcome again.");
    prompt("enter your location")
    alert("You delivery fee is 1500/=")
    alert("You order will be delivered shortly")
    alert("Continue shoppping with us each and every time .")
}*/