document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var selectedFood = Array.from(
    document.getElementById("food").selectedOptions
  ).map((option) => option.value);

  if (selectedFood.length < 2) {
    alert("Please select at least 2 food options.");
    return;
  }

  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;

  var table = document.querySelector("table tbody");
  var newRow = table.insertRow(table.rows.length);
  var cells = [
    firstName,
    lastName,
    address,
    pincode,
    gender,
    selectedFood.join(", "),
    state,
    country,
  ];

  cells.forEach(function (cellData, index) {
    var cell = newRow.insertCell(index);
    cell.textContent = cellData;
  });

  document.getElementById("form").reset();
});
