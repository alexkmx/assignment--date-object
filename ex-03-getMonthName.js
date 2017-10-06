/**
 *     Write a JavaScript function to get the month name from a particular date
 *
 *     Hint: You might want to use `.getMonth()` function from `Date` object
 */

function getMonthName(monthName) {
  var myDate = monthName.getMonth()
if(myDate === 0) {
  return 'January'
}else if( myDate === 1) {
  return 'February'
} else if (myDate === 2) {
  return 'March'
} else if(myDate === 3) {
  return 'April'
} else if(myDate === 4) {
  return 'May'
}else if(myDate === 5) {
  return 'June'
} else if(myDate == 6) {
  return 'July'
} else if(myDate === 7) {
  return 'August'
}else if(myDate === 8) {
  return 'September'
}else if (myDate === 9) {
  return 'October'
}else if(myDate === 10) {
  return 'November'
}else if (myDate === 11) {
  return 'December'
}



  console.log(myDate);



}




console.log("[1] Check that `getMonthName` is a function ")
console.assert( typeof getMonthName === 'function' )
console.log("[1] ==================================================")
console.log()

console.log("[2] Should return 'October' for '10/11/2009'")
console.assert( getMonthName(new Date("10/11/2009")) === 'October' )
console.log("[2] ==================================================")
console.log()

console.log("[3] Should return 'December' for '12/11/2012'")
console.assert( getMonthName(new Date("12/11/2012")) === 'December' )
console.log("[3] ==================================================")
console.log()

console.log("[4] Should return 'January' for '01/15/2017'")
console.assert( getMonthName(new Date("01/15/2017")) === 'January' )
console.log("[4] ==================================================")
console.log()

console.log("[5] Should return 'September' for '09/10/1992'")
console.assert( getMonthName(new Date("09/10/1992")) === 'September' )
console.log("[5] ==================================================")
console.log()
