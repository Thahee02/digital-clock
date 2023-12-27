$("document").ready(function () {
  

  function getTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let date = today.getDate();
    let month = (today.getMonth())+1;
    let year = today.getFullYear();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    date = date < 10 ? '0' + date : date;
    month = month < 10 ? '0' + month : month;

    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
    $("#currentDate").text(`${date}-${month}-${year}`);
  }

  setInterval(getTime,1000);
});
