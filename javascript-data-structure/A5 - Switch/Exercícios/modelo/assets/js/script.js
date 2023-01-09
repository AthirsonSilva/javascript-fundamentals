function getDate() {  
    const date = new Date()
    const hour = date.getHours()
    const a = date.getMinutes()
    const minute = zero(a)
    const day = date.getDate()
    const b = date.getDay()
    const week = getWeek(b)
    const c = date.getMonth() 
    const month = trueMonth(c)
    const year = date.getFullYear()
    getMSG(week, day, month, year, hour, minute)
}

function zero(num) {
    return num >= 10 ? num : `0${num}`
}

function trueMonth(month) {
    switch(month) {
        case 0:
            month = 'January'
            break
        case 1:
            month = 'February'
            break
        case 2:
            month = 'March'
            break
        case 3:
            month = 'May'
            break
        case 4:
            month = 'April'
            break
        case 5:
            month = 'June'
            break
        case 6:
            month = 'July'
            break
        case 7:
            month = 'August'
            break
        case 8:
            month = 'September'
            break
        case 9:
            month = 'October'
            break
        case 10:
            month = 'November'
            break
        case 11:
            month = 'December'
            break
        default:
            month = 'Invalid'
            break
    }
    return month
}

function getWeek(week) {
        switch(week) {
            case 0:
                week = 'Sunday'
                break
            case 1:
                week = 'Monday'
                break
            case 2:
                week = 'Tuesday'
                break
            case 3:
                week = 'Wednesday'
                break
            case 4:
                week = 'Thursday'
                break
            case 5:
                week = 'Friday'
                break
            case 6:
                week = 'Saturday'
                break
            default:
                week = 'Invalid'
                break
        }
        return week
}

function getMSG(week, day, month, year, hour, minute) {
    const msg = document.querySelector('#msg')

    msg.innerHTML = `${week}, ${day} of ${month} ${year} ${hour}:${minute}`
}

getDate()