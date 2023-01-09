const num = 9.56

console.log(Math.floor(num), Math.ceil(num), Math.round(num))
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9), Math.min(1, 2, 4, 5, 6, 7,  8, 9))

let random 

for(i = 1; i < 10; i++){
    random = Math.round(Math.random() * (10 - 5) + 5)
    console.log(random)
}
