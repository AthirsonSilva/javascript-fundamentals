// Variável recebendo o nome
const nome = 'Athirson'
// Objeto Date() para conseguir o horário atual
const data = new Date()
// Variável recebendo a hora
const hours = data.getHours()
// Variável recebendo os minutos
const minutes = data.getMinutes()
//Variável recebendo o tempo do dia
let time = ''

// Estrutura condicional para a recepção do valor do time
if (Number.parseInt(hours) <= 12 && Number.parseInt(hours) > 23){
    time = 'Manhã'
}

else if (Number.parseInt(hours) >= 13 && Number.parseInt(hours) < 18){
    time = 'Tarde'
}

else{
    time = 'Noite'
}

// Output para o usuário
console.log(`Meu nome é "${nome.toUpperCase()}". Estou aprendendo JavaScript ás ${Number.parseInt(hours)}:${minutes} da ${time.toLowerCase()}.`)
