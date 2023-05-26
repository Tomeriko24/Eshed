const form = document.getElementById('signin-form');
const navLinks = document.querySelectorAll('.sidenav a');

const users = [
  { username: "Admin", password: "Adminpswd", redirectPage: "NavBarPages/dash_board/dash_board.html"},
  { username: "Conso1", password: "Consopswd", redirectPage: "NavBarPages copy/Consultants/PagesOfConso/List Of Consts/Const1.html" },
  { username: "Conso2", password: "Consopswd", redirectPage: "NavBarPages copy 2/Consultants/PagesOfConso/List Of Consts/Const2.html" },
  { username: "Dist1", password: "Distpswd", redirectPage: "NavBarPages copy 3/Approval/PagesOfApproval/Dist1.html" },
];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  let isValidUser = false;
  let redirectPage = '';

  // Check if username and password match a user in the database
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      isValidUser = true;
      redirectPage = users[i].redirectPage;
      break;
    }
  }

  if (isValidUser) {
    alert('Signed in successfully!');
    form.reset();
    location.href = redirectPage;
  } else {
    alert('Invalid username or password');
    form.reset();
  }
});
