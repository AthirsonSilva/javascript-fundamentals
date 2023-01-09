/* 
Promise.all 
Promise.race
Promise.resolve
Promise.reject
*/

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject(new Error('BAD VALUE'))
                return
            } 

            resolve(msg.toUpperCase() + ' - Went thought the promise')
        }, time)
    })
}

wait('Connecting with the data base...', rand(1, 3))
.then(answer => {
    console.log(answer)
    return wait('Searching data from data base...', rand(1, 3))
}).then(answer => {
    console.log(answer)
    return wait('Preparing the data from data base...', rand(1, 3))
}).then(answer => {
    console.log(answer)
}).then(() => {
    console.log('Showing the data on the screen...')
})
.catch(e => {
    console.log(`ERROR: ${e}`)
})

console.log('This will be executed first.')

const promises = [
    wait('First promise', rand(1, 5)),
    wait('Second promise', rand(1, 5)),
    wait('Third promise', rand(1, 5)),
    wait(100, rand(1, 5))
]

Promise.race(promises).then(function(value) {
    console.log(value)
}).catch(function(error) {
    console.log(error)
})

Promise.all(promises).then(function(value) {
    console.log(value)
}).catch(function(error) {
    console.log(error)
})


function downloadPage() {
    let inCache = true

    if (inCache) {
        return Promise.reject('Page in cache')
    } else {
        return wait('Page downloaded', 3000)
    }
}

downloadPage().then(dataPage => {
    console.log(dataPage)
}).catch(e => console.log(e))
