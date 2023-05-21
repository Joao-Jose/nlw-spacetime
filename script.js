document.addEventListener("DOMContentLoaded", function () {
  const text = "João José" // Insira o nome desejado aqui
  let index = 0

  function type() {
    const element = document.getElementById("typing-effect")
    element.textContent = text.slice(0, index++)

    if (index <= text.length) {
      setTimeout(type, 190) // Ajuste o valor para controlar a velocidade da digitação
    }
  }

  type()
})
