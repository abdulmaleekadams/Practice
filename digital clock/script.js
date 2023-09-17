function digitalClock() {

    var date = new Date()

    var hours = date.getHours() + ''
    var minutes = date.getMinutes() + ''
    var seconds = date.getSeconds() + ''
    var day = date.getDay()

    if (hours.length < 2) {
        hours = '0' + hours
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes
    }
    if (seconds.length < 2) {
        seconds = '0' + seconds
    }

    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


    var clock = hours + ':' + minutes + ':' + seconds + ' ' + weekDays[day];

    document.getElementById('clock').innerHTML = clock
}

setInterval(digitalClock, 1000);