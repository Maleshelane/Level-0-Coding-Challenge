function timeConvert (num){
    var hours = Math.floor (num/60);
    var minutes = num % 60;
    return hours + "hours(s) and " + minutes + " minute(s).";
}
console.log(timeConvert(133));
console.log (timeConvert(71));
