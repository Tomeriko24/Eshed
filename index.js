const form = document.getElementById('signin-form');
const navLinks = document.querySelectorAll('.sidenav a');

const users = [
  { username: "A", password: "AA" },
  { username: "alon", password: "ronen" },
  { username: "user3", password: "password3" },
];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  let isValidUser = false;

  // Check if username and password match a user in the database
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      isValidUser = true;
      break;
    }
  }

  if (isValidUser) {
    alert('Signed in successfully!');
    form.reset();
    location.href = "NavBarPages/home_page.html";
  } else {
    alert('Invalid username or password');
    form.reset();
  }
});

// Handle click on nav links
for (let i = 0; i < navLinks.length; i++) {
  NavBarPages / home_page.html
  navLinks[i].addEventListener('click', (event) => {
    event.preventDefault();
    const link = event.target.getAttribute('href');
    location.href = link;
  });
}


function signOut() {
  // perform sign out operations here
  alert('Signed out successfully!');
  // location.href ="sign_in_page.html";
  location.href ="../sign_in_page.html";
}



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



