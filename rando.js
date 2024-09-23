function isLeapYear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }else if(year % 400 === 0){
        return true;
    }else{return false;}
}
const result = isLeapYear(2000);
const result2 = isLeapYear(1900);
console.log(result, result2);