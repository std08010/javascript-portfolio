/**
 * This is an imperative implementation for the ticking clock.
 * Note: You may notice that come seconds might be missing from the printout.
 * That is because the processing time of the logClockTime() might be bigger than
 * a number of milliseconds...so all those milliseconds add up and make a sum that is bigger
 * than one second....but the waiting interval is one second so a second is skipped from logging.
 * If the implementation was ideal then the running time of logClockTime() must be 0 millis.
 */

function getClockTime() {
  // Get the Current Time
  let date = new Date();

  // Serialize clock time
  let time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM",
  };

  // Convert to civilian time
  if (time.hours == 12) {
    time.ampm = "PM";
  } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
  }
  // Prepend a 0 on the hours to make double digits
  if (time.hours < 10) {
    time.hours = "0" + time.hours;
  }
  // prepend a 0 on the minutes to make double digits
  if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
  }
  // prepend a 0 on the seconds to make double digits
  if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
  }
  // Format the clock time as a string "hh:mm:ss tt"
  return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}

function logClockTime() {
  // Clear the Console and log the time
  console.clear(); //This works if you run it on terminal. If you run it with the .runcode extension (output tab) then there is no console to clear.
  console.log(getClockTime());
}

// Log Clock Time every Second
setInterval(logClockTime, 1000);
