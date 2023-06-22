document.getElementById("back").onclick = function () {
  location.href = "details2.html";
};

var selectedItems = []; // Array to store the selected items

function addItem() {
  var dropdown = document.getElementById("dropdown");
  var itemTextBox = document.getElementById("itemTextBox");

  var selectedItem = dropdown.options[dropdown.selectedIndex].text;

  // Add the selected item to the array
  selectedItems.push(selectedItem);

  // Update the text box with the concatenated values
  itemTextBox.value = selectedItems.join("  ");
}

function toggleElements() {
  var name = document.getElementById("textBox");
  var price = document.getElementById("textBox1");
  var img = document.getElementById("textBox2");
  var qty = document.getElementById("textBox3");
  var dropdown = document.getElementById("dropdown");
  var veg = document.getElementById("nveg");
  var rating = document.getElementById("rating");
  var desc = document.getElementById("desc");
  var stock = document.getElementById("stock");
  var bsell = document.getElementById("bsell");
  var time = document.getElementById("time");

  if (name.style.display === "none") {
    name.style.display = "block";
    dropdown.style.display = "block";
  } else {
    name.style.display = "none";
    //   dropdown.style.display = "none";
  }

  // if (price.style.display === "none") {
  //     price.style.display = "block";
  //     dropdown.style.display = "block";

  //   } else {
  //     price.style.display = "none";
  //     // dropdown.style.display = "none";
  //   }

  if (img.style.display === "none") {
    img.style.display = "block";
    dropdown.style.display = "block";
  } else {
    img.style.display = "none";
    // dropdown.style.display = "none";
  }

  //   if (qty.style.display === "none") {
  //     qty.style.display = "block";
  //     dropdown.style.display = "block";

  //   } else {
  //     qty.style.display = "none";
  //     // dropdown.style.display = "none";
  //   }

  if (veg.style.display === "none") {
    veg.style.display = "block";
    dropdown.style.display = "block";
  } else {
    veg.style.display = "none";
  }

  if (time.style.display === "none") {
    time.style.display = "block";
    dropdown.style.display = "block";
  } else {
    time.style.display = "none";
  }

  if (stock.style.display === "none") {
    stock.style.display = "block";
    dropdown.style.display = "block";
  } else {
    stock.style.display = "none";
  }

  if (bsell.style.display === "none") {
    bsell.style.display = "block";
    dropdown.style.display = "block";
  } else {
    bsell.style.display = "none";
  }

  if (rating.style.display === "none") {
    rating.style.display = "block";
    dropdown.style.display = "block";
  } else {
    rating.style.display = "none";
  }

  if (desc.style.display === "none") {
    desc.style.display = "block";
    dropdown.style.display = "block";
  } else {
    desc.style.display = "none";
  }
  if (dropdown.style.display === "none") {
  } else {
    var btn2 = document.getElementById("btn2");
    btn2.style.display = "block";
  }
}

function openn() {
  var inputContainer = document.getElementById("inputContainer");
  var dropdown = document.getElementById("dropdown");
  var textBox1 = document.getElementById("textBox1");
  var priceBox = document.getElementById("priceBox");

  if (inputContainer.style.display === "none") {
    inputContainer.style.display = "block";
    dropdown.style.display = "block";
  } else {
    textBox1.value = "";
    priceBox.value = "";
  }
}
