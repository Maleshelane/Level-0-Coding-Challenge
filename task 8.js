function timeConvert (num){
    var hours = Math.floor (num/60);
    var minutes = num % 60;
    return hours + minutes;
}
console.log(timeConvert(133));