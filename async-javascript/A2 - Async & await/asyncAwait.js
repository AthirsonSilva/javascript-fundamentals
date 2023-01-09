function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(('BAD VALUE'))

        setTimeout(() => {
            resolve(msg)
        }, time)
    })
}

function old() {
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
    
    wait('Step one', rand(0, 3)).then(value => {
        console.log(value)
        return wait('Step 2', rand(0, 3))
    }).then(step => {
        console.log(step)
        return step
    }).then(step => {
        console.log(step)
    }).then(step => {
        console.log('Ending the steps...', step)
    })
    .catch(e => console.log(e))
}

async function execute() {
    try {
        const step1 = await wait('Step one', 1000)
        setTimeout(() => {
            console.log('Pending promise.', step1)
        }, 1100)

        const step2 = await wait('Step two', rand(0, 3))
        console.log(step2)

        const step3 = await wait('Step three', rand(0, 3))
        console.log('We ended the phrase: ', step3)
    } catch(e) {
        console.log(e)
    } 
}

execute()

const test = wait('Anything', 5000)
console.log(test)