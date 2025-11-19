const firstName = document.querySelector("#firstName").value;
const lastName = document.querySelector("#lastName").value;
const age = document.querySelector("#age").value;

const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

console.log(person);

//recupero elemento form
const form = document.querySelector("form");

form.setAttribute("data-person", JSON.stringify(person));

console.log(form.getAttribute("data-person"));
