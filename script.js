document.addEventListener("DOMContentLoaded", function () {
  const text = "João José" // Insira o nome desejado aqui
  let index = 0
  let direction = 1 // 1 para digitar, -1 para apagar

  function type() {
    const element = document.getElementById("typing-effect")
    element.textContent = text.slice(0, index)

    if (direction === 1) {
      if (index < text.length) {
        index++
      } else {
        direction = -1 // Inicia a fase de apagar
        setTimeout(type, 2000) // Tempo de pausa antes de apagar (2 segundos)
        return
      }
    } else if (direction === -1) {
      if (index > 0) {
        index--
      } else {
        direction = 1 // Inicia a fase de digitar novamente
      }
    }

    setTimeout(type, 190) // Ajuste o valor para controlar a velocidade da animação
  }

  setTimeout(type, 2000) // Inicia a animação após um tempo de pausa inicial (2 segundos)
})
