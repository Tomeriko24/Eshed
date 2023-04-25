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
    location.href = "home_page.html";
} else {
    alert('Invalid username or password');
    form.reset();
}
});

// Handle click on nav links
for (let i = 0; i < navLinks.length; i++) {home_page.html
  navLinks[i].addEventListener('click', (event) => {
    event.preventDefault();
    const link = event.target.getAttribute('href');
    location.href = link;
  });
}


function signOut() {
  // perform sign out operations here
  alert('Signed out successfully!');
  location.href = "index.html";
}
