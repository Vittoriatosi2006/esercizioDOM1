function addProduct() {
  const input = document.querySelector("input");
  const ul = document.querySelector("ul");

  const value = input.value;

  const li = document.createElement("li");
  ul.appendChild(li);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  li.appendChild(checkbox);

  //lo span contiene il testo dell'input che abbiamo inserito
  const span = document.createElement("span");
  span.innerText = value;
  li.appendChild(span);

  input.value = "";
}
