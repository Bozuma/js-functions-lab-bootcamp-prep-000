// write your code below!
var name, holiday, day

var name ='you'
var mother= 'Mother/s Day'
var day = '20'
var holiday = 'Independence Day'


function happyHolidays(){
  return “Happy holidays!”;
}
happyHolidays();

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`;
}
happyHolidaysTo();

function happyHolidayTo(holiday, name){
return `Happy ${holiday}, ${name}!`;
}
happyHolidayTo();

function holidayCountdown(mother, number){
return `It’s ${number} days until ${mother}!`;
}
holidayCountdown();