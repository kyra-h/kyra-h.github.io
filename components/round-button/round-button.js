console.log(123);

function moveButton() {
    console.log("move!");
} 

// Loads header and footer. 
async function loadComponent(id, file) {
  const el = document.getElementById(id);
  const res = await fetch(file);
  el.innerHTML = await res.text();
}

loadComponent("round-button", "/components/round-button/round-button.html");


// class RoundButton extends HTMLElement {
//   connectedCallback() {
//     const text = this.getAttribute("text") || "Default";
//     this.innerHTML = `<button class="round-button">${text}</button>`;
//   }
// }

// customElements.define("round-button", RoundButton);

// async function loadRoundButton() {
//     const container = document.getElementById("round-button");
//     const res = await fetch("/components/round-button/round-button.html");
//     const html = await res.text();
//     container.innerHTML = html;

//     // get the button
//     const button = container.querySelector("button.round-button");
//     // set its text from the div attribute
//     const text = container.getAttribute("text") || "Default";
//     button.textContent = text;
// }











// console.log("ee");
// async function loadComponent(id, file) {
//   const el = document.getElementById(id);
//   const res = await fetch(file);
//   el.innerHTML = await res.text();
// }

// loadComponent("round-button", "/components/round-button/round-button.html");


// console.log("123");
