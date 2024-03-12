document.getElementById('forms').addEventListener('submit', function(event){
    event.preventDefault()

    var nome = document.getElementById('name').value
    var nota01 = parseInt(document.getElementById('nota01').value)
    var nota02 = parseInt(document.getElementById('nota02').value)
    var nota03 = parseInt(document.getElementById('nota03').value)
    
    var media = Math.round((nota01 + nota02 + nota03)/ 3)
    parseInt(media)
    var resultado = document.getElementById('resultado')
    var mensagem = document.getElementById('mensagem')

    if(media > 70){
        mensagem.innerText = `Parabéns ${nome} ! sua média é ${media.toFixed(2)}. Você está aprovado.`
    } else{
        mensagem.innerText = `Lamento ${nome} ! Sua média é ${media.toFixed(2)}, e você está reprovado.`
    }
    console.log(media)
    resultado.style.display = 'block'
})
