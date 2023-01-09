const width = 297
const height = 210

function landscape(width, height){
    if(Number.parseInt(width) === 297 || Number.parseInt(height) === 210){
        console.log('Landscape sized image.')
        return true
    }else if(Number.parseInt(width) !== 297 || Number.parseInt(height) !== 210){
        console.log('Not landscape sized image.')
        return false
    }
}

const result = landscape(297, 210)
console.log(result)