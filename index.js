const form = document.getElementById('signin-form');

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
    location.href = "first.html";
} else {
    alert('Invalid username or password');
    form.reset();
}
    });


   
  

  // if (isValidUser) {
  //   alert('Signed in successfully!');
  //   form.reset();
  //   // window.open("first.html", "_blank");
  //   location.href = "first.html";
  //   } else {
  //   alert('Invalid username or password');
  //   form.reset();