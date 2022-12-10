/*
**Plan
- create the user interface (Done)
- Create a functioning add (Done)
- Create a complete list item
- Create a delete list item
*/

//create add function
function addItem() {
    var newLi = document.createElement("li");
    var getInput = document.getElementById("list-input").value;
    var textNode = document.createTextNode(getInput);
    newLi.appendChild(textNode);

    //check user submission
    if(getInput === "") {
        alert("Enter your listing please");
    } else {
        document.getElementById("list-items-ul").appendChild(newLi);
    }
    
}