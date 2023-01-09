function random(min, max){
    const result = Math.random() * (max - min) + min
    return Math.round(result)
}

let i = 1
let rand = 0

console.log('\nUsing while\n')
while(rand !== 10){
    rand = random(1, 50)
    console.log(`${i}º value: ${rand}`)
    i++
}

i = 1
console.log('\nUsing do while\n')
do{
    rand = random(1, 50)
    console.log(`${i}º value: ${rand}`)
    i++
}while(rand !== 10)