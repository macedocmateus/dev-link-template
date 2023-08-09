function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector(".perfil img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    // condição: se tiver em light mode, adicionar a imagem avatar light
    img.setAttribute("src", "./Assets/avatar-light.svg");
  } else {
    // se não estiver em light mode, manter a imagem avatar normal ou dark mode
    img.setAttribute("src", "./Assets/avatar.svg");
  }
}