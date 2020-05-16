var but1 = window.document.querySelector('button#calc')
var but2 = window.document.querySelector('button#but')
var txt1 = window.document.getElementById('num')
var txt2 = window.document.getElementById('div2')
var txt3 = window.document.getElementById('resp')

but1.addEventListener('click', clicar)
but2.addEventListener('click', finalizar)
let box = []
let cont = 0
let soma = 0
let media = 0
let menor = 0
let maior = 0

// Settings do primeiro botão
function clicar(){
    txt1.focus()
    txt3.innerHTML = ''
    txt3.style.marginTop = ''
    txt3.style.padding = ''
    verif(txt1.value)
    txt1.value = ''
}
function verif(campo){
    if(campo == ''){
        return window.alert('Por favor, insira um valor!')
    }
    else if(Number.parseInt(campo) < 1 || Number.parseInt(campo) > 100){
        return window.alert('Por favor, insira um valor dentro do limite.')
    }
    else{
        return add(Number.parseInt(campo))
    }
}
function add(num){
    var n1 = num
    if(box.indexOf(n1) != -1){
        return window.alert('Esse número já foi adicionado.')
    }
    else{
        box.push(n1)
        cont += 1
        soma += n1
        if(n1 < menor || menor == 0){
            menor = n1
        }
        else if(n1 > maior){
            maior = n1
        }
        return txt2.innerHTML += `Foi adicionado o número ${n1}<br>`
    }
}

// Settings do segundo botão
function finalizar(){
    verif2(cont)
}
function verif2(contador){
    if(contador == 0){
        return window.alert('Você deve adicionar pelo menos 1 valor')
    }
    else{
        return resposta(txt3)
    }
}
function resposta(resp){
    media = (soma / cont)
    resp.innerHTML = ''
    resp.style.marginTop = '30px'
    resp.style.padding = '10px'
    resp.innerHTML += `Total de números cadastrados: <font color='yellow'>${cont}</font><br>`
    resp.innerHTML += `Soma total dos valores cadastrados: <font color='yellow'>${soma}</font><br>`
    resp.innerHTML += `Média dos valores informados: <font color='yellow'>${media.toFixed(1)}</font><br>`
    resp.innerHTML += `Maior valor informado: <font color='yellow'>${maior}</font><br>`
    resp.innerHTML += `Menor valor informado: <font color='yellow'>${menor}</font><br>`
}
