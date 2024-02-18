function updateTimeCalendar() {
    var now = new Date();
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    var date = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
    document.getElementById('time-calendar').innerHTML = "Time: " + time + "<br>" + "Date: " + date;
    setTimeout(updateTimeCalendar, 1000);
}
updateTimeCalendar();
