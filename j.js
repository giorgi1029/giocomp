const button = document.querySelector("button");
const header = document.querySelector(".header");
const down = document.querySelector(".down");
const but = document.querySelector(".but");
const input = document.querySelector("input");
function randomnumber() {
  const randomTexts = [
    "Exploring the Dynamics of a Random Company: An Insightful OvervieIn todayFurthermore, the sustainability of a random company hinges on its ability to forge meaningful connections with its stakeholders. By prioritizing transparency, accountability, and ethical business practices, the company builds trust and credibility within its ecosystem. These strong relationships not only enhance brand loyalty but also foster long-term partnerships that drive mutual growth and success.s rapidly evolving business landscape, the concept of randomness oftelationships ",
  ];
  return randomTexts;
}
button.addEventListener("click", function () {
  header.style.display = "none";
  down.style.display = "none";
  const bode = document.createElement("div");
  bode.classList.add("bode");
  document.body.appendChild(bode);
  const main = document.createElement("div");
  main.classList.add("main");
  bode.appendChild(main);
  const h1 = document.createElement("h1");
  h1.textContent = "About Us";
  h1.style.textAlign = "center";
  main.appendChild(h1);
  const p = document.createElement("p");
  p.textContent = randomnumber();
  main.appendChild(p);
})
function validateName(event) {
  const name = event.target.value;

  let georgianRegex = /^[\u10D0-\u10FA]+$/;

  let nameValid = georgianRegex.test(name);

  let error = false;

  const errorExist = event.target.parentElement.querySelector(".error");
  if (errorExist) {
    errorExist.remove();
  }

  if (!nameValid) {
    error = "მხოლოდ ქართული ასოები";
  } else if (name.length < 2) {
    error = "მინ. 2 ასო";
  } else if (name.length > 20) {
    error = "მაქს. 20 ასო";
  }

  if (error) {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = error;
    event.target.parentElement.appendChild(errorElement);
  } else {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }
}

function validateEmail(event) {
  const email = event.target.value;

  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let emailValid = emailRegex.test(email);

  let error = false;

  const errorExist = event.target.parentElement.querySelector(".error");
  if (errorExist) {
    errorExist.remove();
  }

  if (!emailValid) {
    error = "ელ.ფოსტა არასწორია";
  }

  if (error) {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = error;
    event.target.parentElement.appendChild(errorElement);
  } else {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }
}

function validatePassword(event) {
  const password = event.target.value;

  // Regular expressions for validating password criteria
  let minLength = 6;
  let hasNumber = /\d/;
  let hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  // Check if the password meets the criteria
  let passwordValid = true;
  let error = false;

  // Remove any existing error messages
  const errorExist = event.target.parentElement.querySelector(".error");
  if (errorExist) {
    errorExist.remove();
  }

  // Check for individual criteria and set error message accordingly
  if (password.length < minLength) {
    passwordValid = false;
    error = "მინ. 6 სიმბოლო";
  } else if (!hasNumber.test(password)) {
    passwordValid = false;
    error = "უნდა შეიცავდეს მინ. 1 რიცხვს";
  } else if (!hasSpecialCharacter.test(password)) {
    passwordValid = false;
    error = "უნდა შეიცავდეს ერთ სიმბოლოს";
  }

  // Display error message if there's an error, otherwise mark as valid
  if (!passwordValid) {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = error;
    event.target.parentElement.appendChild(errorElement);
  } else {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }
}

function validateRepeatPassword(event) {
  const repeatPassword = event.target.value;
  const originalPassword = document.querySelector(".repass").value;

  let error = false;

  const errorExist = event.target.parentElement.querySelector(".error");
  if (errorExist) {
    errorExist.remove();
  }

  if (repeatPassword !== originalPassword) {
    error = "პაროლები არ ემთხვევა";
  }

  if (error) {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
    const errorElement = document.createElement("span");
    errorElement.classList.add("error");
    errorElement.innerText = error;
    event.target.parentElement.appendChild(errorElement);
  } else {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }
}
but.addEventListener("click",function(event) {
  const name = document.querySelector(".name").value;
  const surname = document.querySelector(".surname").value;
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".pass").value;
  const repeatPassword = document.querySelector(".repass").value;
  if (name && surname && email && password && repeatPassword) {
    alert("თქვენ წარმატებით შექმნით ანგარიშს");
  } else {
    alert("შეავსეთ ყველა ველი");
  }
});

document
  .querySelector(".name")
  .addEventListener("input", validateName);
document
  .querySelector(".surname")
  .addEventListener("input", validateName);
document
  .querySelector(" .email")
  .addEventListener("input", validateEmail);
document
  .querySelector(".pass")
  .addEventListener("input", validatePassword);
document
  .querySelector(".repass")
  .addEventListener("input", validateRepeatPassword);
