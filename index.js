const numero = parseFloat(prompt("Calculadora de 1 a 20\n\n" + "Digite abaixo o número a ser caculado"))
let resultado = ""

//para multiplicador iniciando em 1, condição menor igual a 20 (de 1 a 20), aumentar um número
for (let multiplicador = 1; multiplicador <= 20; multiplicador++) {
  resultado += " - " + numero + " x " + multiplicador + " = " + numero * multiplicador + "\n"
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)