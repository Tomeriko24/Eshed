function signOut() {
  // perform sign out operations here
  alert('Signed out successfully!');
  // location.href ="sign_in_page.html";
  location.href = "../../../Sign_In/sign_in_page.html";
}

function filterList() {
  var input, filter, ul, li, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myList");
  li = ul.getElementsByTagName("li");
  for (var i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


function getTableRows() {
  const table = document.getElementsByTagName('table')[0];
  const tbody = table.getElementsByTagName('tbody')[0];
  const rows = [];

  for (let i = 0; i < tbody.rows.length; i++) {
    rows.push(tbody.rows[i]);
  }

  return rows;
}

function ask4Help() {
  location.href = "mailto:Eshed_Support@Eshed.com";
}

function goBack() {
  history.go(-1);
}


function showTable() {
  var selectElement = document.getElementById("permission");
  var basicTable = document.getElementById("basicTable");
  var highTable = document.getElementById("highTable");
  var selectedPermission = document.getElementById("selectedPermission");
  var permissionSubContainer = document.getElementById("permissionSubContainer");

  basicTable.style.display = "none";
  highTable.style.display = "none";
  permissionSubContainer.style.display = "none";

  if (selectElement.value === "BasicLevel") {
    basicTable.style.display = "table";
    permissionSubContainer.style.display = "block";
  } else if (selectElement.value === "HighLevel") {
    highTable.style.display = "table";
  }

  selectedPermission.textContent = "";
}

function updateSelectedPermission() {
  var permissionSubElement = document.getElementById("permissionSub");
  var selectedPermission = document.getElementById("selectedPermission");

  selectedPermission.textContent = "Selected Const: " + permissionSubElement.value;
}














// // Wait for the DOM to finish loading before running the code
// document.addEventListener('DOMContentLoaded', function() {
  
//   // Use fetch to load the contents of the second HTML page
//   fetch('second-page.html')
//     .then(response => response.text())
//     .then(data => {
      
//       // Create a new DOM parser
//       const parser = new DOMParser();
//       const html = parser.parseFromString(data, 'text/html');
      
//       // Find the table in the second HTML page
//       const table = html.querySelector('table');
      
//       // Insert the table into the first HTML page
//       const tableContainer = document.getElementById('table-container');
//       tableContainer.appendChild(table);
      
//     });
  
// });


// function Back2Conso(){
//   location.href = "https://github.com/Tomeriko24/New/blob/b3ecc49e66d770f7370125e21dd1be792cea3ad8/NavBarPages/consultants.html";
// }

// fetching data?
// const csvFilePath = 'dataOfConst.csv';
// const listContainer = document.querySelector('#list-container');

// Papa.parse(csvFilePath, {
//   download: true,
//   header: true,
//   complete: function(results) {
//     const data = results.data;

//     // Get an array of column names
//     const columnNames = Object.keys(data[0]);

//     // Create an object to store the arrays for each column
//     const columnArrays = {};

//     // Loop through each column
//     columnNames.forEach(function(columnName) {
//       columnArrays[columnName] = [];

//       // Loop through each row and add the value for the current column to the array
//       data.forEach(function(row) {
//         columnArrays[columnName].push(row[columnName]);
//       });

//       // Create a new HTML list container for the current column
//       const columnContainer = document.createElement('div');
//       columnContainer.innerHTML = '<h2>' + columnName + '</h2><ul><li>' + columnArrays[columnName].join('</li><li>') + '</li></ul>';

//       // Add the HTML list container to the main list container
//       listContainer.appendChild(columnContainer);
//     });

//     // Log the arrays for each column to the console
//     console.log(columnArrays);
//   }
// });



