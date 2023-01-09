function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hey, i am a promise.')
            resolve()
        }, 2000)
    })
}

export default async function() {
    await promise()
    console.log('Endend')
}