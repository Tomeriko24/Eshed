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

    function saveValues() {
        var projectName = document.getElementById('projectName').value;
        var poc = document.getElementById('poc').value;
        var projectDescription = document.getElementById('projectDescription').value;
        var startDate = document.getElementById('startDate').value;
        var endDate = document.getElementById('endDate').value;
        var expertise = document.getElementById('expertise').value;
        var medicalInsurance = document.getElementById('medicalInsurance').value;
        var predictedHours = document.getElementById('predictedHours').value;

        // Create an object to store the values
        var values = {
            projectName: projectName,
            poc: poc,
            projectDescription: projectDescription,
            startDate: startDate,
            endDate: endDate,
            expertise: expertise,
            medicalInsurance: medicalInsurance,
            predictedHours: predictedHours
        };

        // Save the values to local storage
        localStorage.setItem('formValues', JSON.stringify(values));
    }

    function resetValues() {
        // Clear the form fields
        document.getElementById('projectName').value = '';
        document.getElementById('poc').value = '';
        document.getElementById('projectDescription').value = '';
        document.getElementById('startDate').value = '';
        document.getElementById('endDate').value = '';
        document.getElementById('expertise').value = '';
        document.getElementById('medicalInsurance').value = '';
        document.getElementById('predictedHours').value = '';

        // Remove the saved values from local storage
        localStorage.removeItem('formValues');
    }

    function loadFile() {
      const fileInput = document.getElementById("file-input");
      const file = fileInput.files[0];
    
      if (file && file.type === "application/pdf") {
        const fileURL = URL.createObjectURL(file);
        const newTab = window.open(fileURL, "_blank");
        newTab.focus();
      } else {
        console.log("Please select a PDF file.");
      }
    }
        


    function searchTable() {
      // Get the search input value
      const searchValue = document.getElementById('search-input').value.trim().toLowerCase();
    
      // Get the table body element
      const tableBody = document.querySelector('tbody');
    
      // Get all the rows in the table
      const rows = tableBody.querySelectorAll('tr');
    
      // Clear the previous search results
      rows.forEach(row => {
        row.style.display = 'none';
      });
    
      // Iterate over the rows and show matching rows based on the search value
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        let foundMatch = false;
    
        // Check if any cell in the row contains the search value
        cells.forEach(cell => {
          if (cell.textContent.toLowerCase().includes(searchValue)) {
            foundMatch = true;
          }
        });
    
        // Show the row if a match is found
        if (foundMatch) {
          row.style.display = 'table-row';
        }
      });
    }

    
    function resetPage() {
      location.reload(); // Reloads the current page
    }
    
    function SnackAndReset() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
      setTimeout(function () { location.href = "results.html"; }, 3000);
      function RestValues() {
          var projectName = document.getElementById('projectName').value;
          var poc = document.getElementById('poc').value;
          var projectDescription = document.getElementById('projectDescription').value;
          var startDate = document.getElementById('startDate').value;
          var endDate = document.getElementById('endDate').value;
          var expertise = document.getElementById('expertise').value;
          var medicalInsurance = document.getElementById('medicalInsurance').value;
          var predictedHours = document.getElementById('predictedHours').value;
      }
      // Create an object to store the values
      var values = {
          projectName: "",
          poc: "",
          projectDescription: "",
          startDate: "",
          endDate: "",
          expertise: "",
          medicalInsurance: "",
          predictedHours: ""
      };

  }



// function that saves the toggle choice
// function updateSelectedPermission() {
//   var permissionSubElement = document.getElementById("permissionSub");
//   var selectedPermission = document.getElementById("selectedPermission");

//   selectedPermission.textContent = "Selected Const: " + permissionSubElement.value;
// }














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



