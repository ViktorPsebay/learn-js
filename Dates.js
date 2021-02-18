function getWeekDay(date) {
  switch (date.getDay()) {
    case 0:
      return "ВС";
    case 1:
      return "ПН";
    case 2:
      return "ВТ";
    case 3:
      return "СР";
    case 4:
      return "ЧТ";
    case 5:
      return "ПТ";
    case 6:
      return "СБ";
  }
}

function getDateAgo(date, days) {
  let resultDate = new Date(date);
  resultDate.setDate(date.getDate() - days);
  return resultDate.getDate();
}

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1);
  date.setDate(date.getDate() - 1);
  return date.getDate();
}

function getSecondsToTomorrow() {
  let now = new Date();
  return Math.round(
    (new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now) /
      1000
  );
}

function formatDate(date) {
  let now = new Date();
  let time = now - date;
  if (time < 1000) return "прямо сейчас";
  else if (time < 6e4) return `${Math.floor(time / 1000)} сек. назад`;
  else if (time < 36e5) return `${Math.floor(time / 6e4)} мин. назад`;
  else {
    let year = date.getFullYear().toString().slice(-2);
    let month = date.getMonth();
    month = ++month < 10 ? "0" + month : month.toString();
    let day = date.getDate();
    day = day < 10 ? "0" + day : day.toString();
    let hour = date.getHours();
    hour = hour < 10 ? "0" + hour : hour.toString();
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes.toString();

    return day + "." + month + "." + year + " " + hour + ":" + minutes;
  }
}
