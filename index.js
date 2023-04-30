const form = document.getElementById('signin-form');
const navLinks = document.querySelectorAll('.sidenav a');

const users = [
  { username: "A", password: "A" },
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
  location.href = "../sign_in_page.html";
}



//visualization data - home page
var data = [
  { y: '2014', a: 50, b: 90},
  { y: '2015', a: 65,  b: 75},
  { y: '2016', a: 50,  b: 50},
  { y: '2017', a: 75,  b: 60},
  { y: '2018', a: 80,  b: 65},
  { y: '2019', a: 90,  b: 70},
  { y: '2020', a: 100, b: 75},
  { y: '2021', a: 115, b: 75},
  { y: '2022', a: 120, b: 85},
  { y: '2023', a: 145, b: 85},
  { y: '2024', a: 160, b: 95}
],
config = {
  data: data,
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Total Income', 'Total Outcome'],
  fillOpacity: 0.6,
  hideHover: 'auto',
  behaveLikeLine: true,
  resize: true,
  pointFillColors:['#ffffff'],
  pointStrokeColors: ['black'],
  lineColors:['gray','red']
};
config.element = 'area-chart';
Morris.Area(config);
config.element = 'line-chart';
Morris.Line(config);
config.element = 'bar-chart';
Morris.Bar(config);
config.element = 'stacked';
config.stacked = true;
Morris.Bar(config);
Morris.Donut({
element: 'pie-chart',
data: [
{label: "Friends", value: 30},
{label: "Allies", value: 15},
{label: "Enemies", value: 45},
{label: "Neutral", value: 10}
]
});





























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



