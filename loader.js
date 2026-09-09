// Loads header and footer. 
async function loadComponent(id, file) {
  const el = document.getElementById(id);
  const res = await fetch(file);
  el.innerHTML = await res.text();
}

loadComponent("header", "/components/header/header.html");
loadComponent("footer", "/components/footer/footer.html");