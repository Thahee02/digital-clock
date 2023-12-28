$("document").ready(function () {
  function getTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = today.getDay();
    let date = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    date = date < 10 ? "0" + date : date;
    month = month < 10 ? "0" + month : month;

    switch (day) {
      case 0:
        day = "SUN";
        break;
      case 1:
        day = "MON";
        break;
      case 2:
        day = "TUE";
        break;
      case 3:
        day = "WED";
        break;
      case 4:
        day = "Thu";
        break;
      case 5:
        day = "FRI";
        break;
      case 6:
        day = "SAT";
        break;
    }

    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
    $("#currentDate").text(`${day} ${date}-${month}-${year}`);
  }

  setInterval(getTime, 1000);
});
