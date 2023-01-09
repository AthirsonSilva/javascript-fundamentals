function meuEscopo(){
    const form = window.document.querySelector('form')

    /*
    form.onsubmit = function(evento){
        evento.preventDefault
        window.alert('Cadastrado com sucesso!!')
        console.log('Cadastrado com sucesso!!')
    }
    */

    let i = 1
    function eventForm(evento){
        evento.preventDefault()
        const nome = window.document.querySelector('#nome')
        const sobrenome = window.document.querySelector('#sobrenome')
        const peso = window.document.querySelector('#peso')
        const altura = window.document.querySelector('#altura')
        const msg = window.document.querySelector('#msg')
        const dados = new Array()

        dados.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        msg.innerHTML += `<p>
        ----------------------------------------------</br> 
        Nome: ${nome.value.toString()}</br>
        Sobrenome: ${sobrenome.value.toString()}</br>
        Peso: ${Number.parseFloat(peso.value)}</br>
        Altura: ${Number.parseFloat(altura.value)}</br>
        ----------------------------------------------
        <p> </br>`
    }

    form.addEventListener('submit', eventForm)
}
meuEscopo()