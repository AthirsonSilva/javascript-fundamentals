function Bigger(x, y){
    if(x > y){
        console.log(`X(${x}) is bigger than Y(${y})`)
        return x
    }else if(x < y){
        console.log(`Y(${y}) is bigger than X(${x})`)
        return y
    }
}

const num = Bigger(56, 87)
console.log(num)