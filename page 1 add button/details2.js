document.getElementById("backk").onclick=function(){
    location.href="details1.html";
}

document.getElementById("next2").onclick=function(){
    location.href="details3.html";
}
  function createCheckbox() {
    // Get the input text value
    var inputText = document.getElementById("textinput").value;
  
    // Create a new checkbox element
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = textinput;
  
    // Create a label for the checkbox
    var label = document.createElement("label");
    label.appendChild(document.createTextNode(inputText));
  
    // Append the checkbox and label to the container
    var container = document.getElementById("checkboxContainer");
    container.appendChild(checkbox);
     container.appendChild(label);
  }
  document.getElementsByClassName("dropbtn")[0].onclick=function()
  {
    location.href="details2.html";
  }

  function displaySelectedItems() {
    var inputField = document.getElementById("inputField");
    var selectedItemsList = document.getElementById("selectedItemsList");
    
    var selectedItems = inputField.value.split(",");
    

    // Add selected items to the list
    selectedItems.forEach(function(item) {
      var li = document.createElement("li");
      li.textContent = item.trim();
      selectedItemsList.appendChild(li);
    });
  }