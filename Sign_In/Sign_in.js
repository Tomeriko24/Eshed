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
    location.href ="NavBarPages/dash_board/dash_board.html";
    // location.href ="Test_import.html";
  } else {
    alert('Invalid username or password');
    form.reset();
  }
});
