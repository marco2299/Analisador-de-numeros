var num = document.querySelector('input#num')
var tabela = document.getElementById("valores")
var valores=[]
var res = document.getElementById('res')
function adc(){
    if(valores.indexOf(num.value) != -1){
        alert('Número já cadastrado!!')
        return  num.value = ''
    }
    if(num.value >=1 && num.value <=100){
        let T = document.createElement('option')
        tabela.appendChild(T)
        valores.push(num.value)
        for(let i = 0; i < valores.length; i++ ){
            T.innerHTML = ` Número ${valores[i]} adicionado.`
            num.value= ""
            num.focus() 
            res.innerHTML = ''
        }
    }
    else if(num.value < 1 || num.value > 100){
        alert("[ERRO:] O valor digitado deve ser de 1 a 100.")
    }
}
num.addEventListener('keypress', function(event) //se o usuario teclar enter, chama a função de clicar.
{
    if (event.key === 'Enter'){
      adc();
    }
})
function limparValores(){
    valores = [];
    tabela.innerHTML = ''; // Limpa a tabela de valores
    res.innerHTML = 'Adicione números e irei te mostrar algumas informações sobre eles!'; // Limpa o resultado
}

function finalizar(){ // Ação de finalizar:
var total = valores.reduce((n1, n2) =>{
    var soma = Number(n1) + Number(n2) 
    return soma
}) 
    if(valores.length > 0){
         
        res.innerHTML = `
        Ao todo temos ${valores.length} números cadastrados <br> 
        O maior valor é ${Math.max(...valores)} <br> 
        O menor valor é ${Math.min(...valores)} <br> 
        A soma de todos os números é ${total}  `
    } 
    else {
        alert(' [ERRO:] Por favor, adicione valores antes de finalizar!')
        num.focus()
    }
}