function zero(num) {
    return num >= 10 ? num : `0${num}`
}

function format(data) {
    const day = zero(data.getDate())
    const month = zero(data.getMonth() + 1)
    const year = zero(data.getFullYear())
    const hour = zero(data.getHours())
    const minutes = zero(data.getMinutes())
    const seconds = zero(data.getSeconds())

    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`
}

const data = new Date()
const brazil = format(data)
console.log(brazil)