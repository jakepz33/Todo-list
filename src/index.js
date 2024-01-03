function greet() {
  const header1 = document.createElement("h1");

  header1.textContent = "Hello World";

  console.log("ran");

  return header1;
}

document.body.appendChild(greet());
