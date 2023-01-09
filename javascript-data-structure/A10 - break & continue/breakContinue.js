const num = [1, 2, 3, 4 , 5,6, 7, 8, 9,]

for(let i of num){
    if(i % 2 === 0){
        console.log('Pair number. The next will be a impair.')
        continue;
    }
    console.log(i) 
    if(i === 9){
        console.log('Last number "9" reached. Breaking the loop...')
        break
    }
}