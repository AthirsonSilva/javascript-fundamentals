const msg = document.querySelector('.container h1')
const date = new Date()

function getWeek(week) {
    let weekDay

    switch(week) {
        case 0:
            weekDay = 'Sunday'
            break
        case 1:
            weekDay = 'Monday'
            break
        case 2:
            weekDay = 'Tuesday'
            break
        case 3:
            weekDay = 'Wednesday'
            break
        case 4:
            weekDay = 'Thursday'
            break
        case 5:
            weekDay = 'Friday'
            break
        case 6:
            weekDay = 'Saturday'
            break
        default:
            weekDay = 'Invalid'
            break
    }
    return weekDay
}

function trueMonth(month) {
    let monthName

    switch(month) {
        case 0:
            monthName = 'January'
            break
        case 1:
            monthName = 'February'
            break
        case 2:
            monthName = 'March'
            break
        case 3:
            monthName = 'May'
            break
        case 4:
            monthName = 'April'
            break
        case 5:
            monthName = 'June'
            break
        case 6:
            monthName = 'July'
            break
        case 7:
            monthName = 'August'
            break
        case 8:
            monthName = 'September'
            break
        case 9:
            monthName = 'October'
            break
        case 10:
            monthName = 'November'
            break
        case 11:
            monthName = 'December'
            break
        default:
            monthName = 'Invalid'
            break
    }
    return monthName
}

function getDate() {  
    const date = new Date()
    const hour = date.getHours()
    const minute = zero(date.getMinutes())
    const day = date.getDate()
    const week = getWeek(date.getDay())
    const month = trueMonth(date.getMonth())
    const year = date.getFullYear()
    getMSG(week, day, month, year, hour, minute)
}

function zero(num) {
    return num >= 10 ? num : `0${num}`
}

function getMSG(week, day, month, year, hour, minute) {
    msg.innerHTML = `${week}, ${day} of ${month} ${year} ${hour}:${minute}`
}

getDate()