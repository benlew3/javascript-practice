function startTime() {
  var today = new Date();
    var b = new Date();
      var Month = new Array(12);
        Month[0] = "January";
        Month[1] = "February";
        Month[2] = "March";
        Month[3] = "Arpil";
        Month[4] = "May";
        Month[5] = "June";
        Month[6] = "July";
        Month[7] = "August";
        Month[8] = "September";
        Month[9] = "October";
        Month[10] = "November";
        Month[11] = "December";
      var o = Month[b.getMonth()];

    var w = new Date();
      var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
      var n = weekday[w.getDay()];

    var d = new Date();
      var t = d.getDate();

    var y = today.getFullYear();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);



  document.getElementById('txt').innerHTML =
   n + ", " + o + " " + t + ", " + y + " - " + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}; //add zero in front of the number < 10
  return i;
}