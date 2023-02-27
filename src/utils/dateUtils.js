import moment from 'moment'

export function getTimeDifference(date1, date2) {
  return moment(date1).diff(moment(date2), 'minutes')
}

export function getTime(date) {
  return moment(date).format('h:mm A')
}

export function chatDividerFormat(date) {
  return moment(date).format('MMMM D, YYYY')
}

export function isNewDay(date1, date2) {
  return !moment(date1).isSame(moment(date2), 'day')
}

export function chatMainTime(date) {
  return moment(date).format('MM/DD/YYYY')
}

export function isSameTime(date1, date2) {
  return moment(date1).isSame(moment(date2))
}

export function dateMonthFormat(date) {
  let check = moment(date).format('MMMM D, YYYY')
  let month = check.format('MMM');
  let day   = check.format('D');
  let year  = check.format('YYYY');

  return {day,month,year}
}

export function dayFormat(date) {
 
  return moment(date).format('D');

}

export function monthFormat(date) {

  return moment(date).format('MMM');

}

export function greetings(){
  let today = new Date()
  let curHr = today.getHours()

  if (curHr < 12) {
    return 'Good morning'
  } else if (curHr < 18) {
    return 'Good afternoon'
  } else {
    return 'Good evening'
  }
}

export function formatTime(timeString) {
  const [hourString, minute] = timeString.split(":");
  const hour = +hourString % 24;
  return (hour % 12 || 12) + ":" + minute + (hour < 12 ? " AM" : " PM");
}
