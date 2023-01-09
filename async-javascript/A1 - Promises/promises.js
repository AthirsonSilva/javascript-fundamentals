function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('BAD VALUE'))

        setTimeout(() => {
            resolve(msg)
        }, time)
    })
}

function withCallBack() {
    return wait('Phrase 1', rand(1, 3), function() {
                wait('Phrase 2', rand(1, 3), function() {
                    wait('Phrase 3', rand(1, 3))
                })
            })
}

wait('Connecting with the data base...', rand(1, 3))
.then(answer => {
    console.log(answer)
    return wait('Searching data from data base...', rand(1, 3))
}).then(answer => {
    console.log(answer)
    return wait(1, rand(1, 3))
}).then(answer => {
    console.log(answer)
}).then(() => {
    console.log('Showing the data on the screen...')
})
.catch(e => {
    console.log(`ERROR: ${e}`)
})

console.log('This will be executed first.')