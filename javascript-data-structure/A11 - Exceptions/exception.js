function Sum(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new TypeError('X and Y must be numbers')
    }
    return x + y
}

function error(){
    try{
    console.log(n)
    }catch(error){
        n = 'Variable created with success.'
        console.log(`Error, value not found. ${n}`)
    }
    try{
    console.log(Sum('t', 6))
    try{
        console.log(n)
    }catch(error){
        console.log('Another error.')
    }finally{
        console.log('Executed again.')
    }
    }catch(error){
        console.log('An error was found!')
    }finally{
        console.log('I am always executed.')
    }
}

function returnDate(date){
    if(date && !(date instanceof Date)){
        throw new TypeError('Waiting a Date() instance...')
    }
    if(!date){
        date = new Date()
    }

    return date.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
    const date = new Date('01-01-1970 12:58:12')
    const hour = returnDate()
    console.log(hour)
}catch(e){
    console.log('Fixing error...')
}finally{
    console.log('Finished!')
}


