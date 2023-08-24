const searchBtn = document.querySelector(".search-btn");
const submitBtn = document.querySelector(".submit-btn");

const hamburger = document.querySelector(".hamburger");
const headerNav = document.querySelector(".header-nav");
const navLinks = document.querySelectorAll(".header-nav a");

const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const position = document.querySelector(".position");
const company = document.querySelector(".company");
const companyType = document.querySelector(".companyType");
const country = document.querySelector(".country");
const email = document.querySelector(".email");
const emailSubs = document.querySelectorAll(".subscribe");
const radio = document.querySelector(".radio");

const inputs = document.querySelectorAll('input');

const arrowContainer = document.querySelector(".arrow-container");
const arrowUp = document.querySelector(".arrow-up");

const signupForm = document.querySelector(".signup-form");
const backBtn = document.querySelector(".back-btn");
const formSubmit = document.querySelector(".form-submit");

let flag;
let emailSubscription = "";
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

searchBtn.addEventListener("click", (e) => e.preventDefault()); // prevent form to submit to server

// add active class for hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerNav.classList.toggle("active-nav");
});

// remove hamburger
navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    headerNav.classList.remove("active-nav");
  })
})

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if(validateFields()){
    signupForm.classList.add("hide-form");
    formSubmit.classList.add("active-form-submit");
    alert("All Fields filled successfully!")
  } 
});

backBtn.addEventListener("click", () => {
  signupForm.classList.remove("hide-form");
  formSubmit.classList.remove("active-form-submit");
})


function validateFields() {
  
  emailSubs.forEach(sub => {
    if (sub.checked)
      emailSubscription = sub.value;
  });

  // check for one form field is valid or not and stop further execution
  // if(!checkFirstName())
  //   return false;

  let isValidFirstName = checkFirstName();
  let isValidLastName = checkLastName();
  let isValidPosition = checkPosition();
  let isValidCompany = checkCompany();
  let isValidCompanyType = checkCompanyType();
  let isValidCountry = checkCountry();
  let isValidEmail = checkEmail();
  let isValidEmailSubscription = checkEmailSubscription(emailSubscription);

  // check all form fields are valid or not
  if(!isValidFirstName || !isValidLastName || !isValidPosition || !isValidCompany || !isValidCompanyType || !isValidCountry || !isValidEmail || !isValidEmailSubscription){
    return false; 
  } else{
    return true;
  }
}

firstName.addEventListener("focusout", () => checkFirstName());

lastName.addEventListener("focusout", () => checkLastName());

position.addEventListener("focusout", () => checkPosition());

company.addEventListener("focusout", () => checkCompany());

companyType.addEventListener("focusout", () => checkCompanyType());

country.addEventListener("focusout", () => checkCountry());

email.addEventListener("focusout", () => checkEmail());

emailSubs.forEach((emailSub => {
    emailSub.addEventListener("focusout", () => {
      checkEmailSubscription(emailSubscription);
    });
}));

function checkFirstName() {
  const firstNameValue = firstName.value.trim();

  if (firstNameValue === "") {
    const errorText = "*this field is required!";
    const errorParent = firstName.parentElement;

    showError(errorText, errorParent);
    return false;
  } else if (firstNameValue.length < 3) {
    const errorText = "*this field should be greater than 3 characters!";
    const errorParent = firstName.parentElement;

    showError(errorText, errorParent);
    return false;

  } else if (!isNaN(firstNameValue)) {
    const errorText = "*this field should not have numbers!";
    const errorParent = firstName.parentElement;

    showError(errorText, errorParent);
    return false;
  }
  else{
    showSuccess(firstName); 
    return true;
  }
}

function checkLastName() {
  const lastNameValue = lastName.value.trim();

  if (lastNameValue === "") {
    const errorText = "*this field is required!";
    const errorParent = lastName.parentElement;

    showError(errorText, errorParent);
    return false;
  } else if (lastNameValue.length < 3) {
    const errorText = "*this field should be greater than 3 characters!";
    const errorParent = lastName.parentElement;

    showError(errorText, errorParent);
    return false;
  } else if (!isNaN(lastNameValue)) {
    const errorText = "*this field should not have numbers!";
    const errorParent = lastName.parentElement;

    showError(errorText, errorParent);
    return false;
  }
  else{
    showSuccess(lastName);
    return true;
  }
}

function checkPosition() {
  const positionValue = position.value.trim();

  if (positionValue === "") {
    const errorText = "*this field is required!";
    const errorParent = position.parentElement;

    showError(errorText, errorParent);
    return false;
  } else if (!isNaN(positionValue)) {
    const errorText = "*this field should not have numbers!";
    const errorParent = position.parentElement;

    showError(errorText, errorParent);
    return false;
  }
  else{
    showSuccess(position);
    return true;
  }
}

function checkCompany() {
  const companyValue = company.value.trim();

  if (companyValue === "") {
    const errorText = "*this feild is required!";
    const errorParent = company.parentElement;

    showError(errorText, errorParent);
    return false;
  } else{
    showSuccess(company);
    return true;
  }
}

function checkCompanyType(){
  const companyTypeValue = companyType.value.trim();

  if (companyTypeValue === "select") {
    const errorText = "*this field is required!";
    const errorParent = companyType.parentElement;

    showError(errorText, errorParent);
    return false;
  } else{
    showSuccess(companyType);
    return true;
  }
}

function checkCountry(){
  const countryValue = country.value.trim();

  if (countryValue === "choose") {
    const errorText = "*this field is required!";
    const errorParent = country.parentElement;

    showError(errorText, errorParent);
    return false;
  } else{
    showSuccess(country);
    return true;
  }
}

function checkEmail(){
  const emailValue = email.value.trim();

  if (emailValue === "") {
    const errorText = "*this field is required!";
    const errorParent = email.parentElement;

    showError(errorText, errorParent);
    return false;
  } else if (emailValue.match(emailPattern) == null) {
    const errorText = "*valid email is required!";
    const errorParent = email.parentElement;

    showError(errorText, errorParent);
    return false;
  }
  else{
    showSuccess(email);
    return true;
  }
}

function checkEmailSubscription(emailSubscription){
  if (emailSubscription === "") {
    const errorText = "*this field is required!";
    const errorParent = radio.parentElement;

    showError(errorText, errorParent);
    return false;
  } else{
    showSuccess(radio);
    return true;
  }
}

window.onscroll = () => showArrowUp();

arrowUp.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

function showArrowUp() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    arrowContainer.classList.add("active-arrowup");
  else
    arrowContainer.classList.remove("active-arrowup");
}

function showError(errorText, errorParent) {
  const showError = errorParent.querySelector(".error-text");
  showError.innerText = errorText;

  errorParent.classList.add("error");
  errorParent.classList.remove("success");
}

function showSuccess(element) {
  const successParent = element.parentElement;
  const showError = successParent.querySelector(".error-text");

  showError.innerText = "";

  successParent.classList.add("success");
  successParent.classList.remove("error");
}