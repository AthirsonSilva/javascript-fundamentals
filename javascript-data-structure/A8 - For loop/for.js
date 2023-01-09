function count(){
    for(let i = 0; i <= 10; i++){
    console.log(`Line: ${i}`)
    }
}

function type(){
    for(let i = 0; i <= 10; i++){
    const type = i % 2 == 0 ? 'type' : 'impair';
    console.log(i, type)
    }
}

function array(){
    const fruits = ['Apple', 'Melon', 'Banana']
    for(let i = 0; i < fruits.length; i++){
        console.log(`Index: ${fruits[i]}`)
    }
}

array()