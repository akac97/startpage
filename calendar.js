function updateCalendar() {
    var now = new Date();
    var date = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
    document.getElementById('calendar').innerHTML = date;
}
updateCalendar();
