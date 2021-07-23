const inputReais = document.querySelector('.inputReais')
const calcular = document.querySelector('.calcular')
const resultado = document.querySelector('.result')
const moedas = document.querySelector('.moedas')
const resultadoMoedas = document.querySelector('.resultMoedas')

function calculo() {
  resultadoMoedas.innerHTML = ''
  const reais = parseFloat(inputReais.value)
  if (reais >= 0) {
    const centavos = (reais * 100)
    resultado.innerHTML = centavos.toFixed(0)
    moedas.classList.add('active')

    m100 = parseInt((reais / 1))

    m50 = parseInt(((reais % 1) * 2))

    m25 = parseInt(((((reais - m100)) * 4) - m50 * 2))

    m10 = parseInt((reais - (m100 + (m50 / 2) + (m25 / 4))) * 10)

    m5 = parseInt(((reais - (m100 + (m50 / 2) + (m25 / 4) + (m10 / 10))) * 20))

    // m1 = 0
    m1 = parseInt(((reais - (m100 + (m50 / 2) + (m25 / 4) + (m10 / 10) + (m5 / 20))) * 100).toFixed(0))
    console.log(m5)
    
    if (m100 >= 1) {
      resultadoMoedas.innerHTML += m100 + '<span> moeda(s) de 1 real</span><br>'
    } else {
      resultadoMoedas.innerHTML = ''
    }
    if (m50 >= 1) {
      resultadoMoedas.innerHTML += m50 + '<span> moeda de 50 centavos</span><br>'
    }
    if (m25 >= 1) {
      resultadoMoedas.innerHTML += m25 + '<span> moeda de 25 centavos</span><br>'
    }
    if (m10 >= 1) {
      resultadoMoedas.innerHTML += m10 + '<span> moeda(s) de 10 centavos</span><br>'
    }
    if (m5 >= 1) {
      resultadoMoedas.innerHTML += m5 + '<span> moeda(s) de 5 centavos</span><br>'
    }
    if (m1 >= 1) {
      resultadoMoedas.innerHTML += m1 + '<span> moeda(s) de 1 centavo</span><br>'
    }
    
    
  } else {
    alert('#Erro, verificar o valor inserido!')
    moedas.classList.remove('active')
    resultado.innerHTML = '0'
  }

}

calcular.onclick = calculo