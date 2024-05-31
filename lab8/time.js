function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    let currentSeconds = today.getSeconds();
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('seconds').innerHTML = ('0' + currentSeconds).slice(-2);
}
setInterval(showTime, 1000);