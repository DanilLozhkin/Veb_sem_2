//1
let spid_km = 36, spid_m = 20;
function convertSpeed(spid, text) {
    if(text=='toMS'){
        return(spid* 1000 / 60 / 60);
    }else if(text == 'toKHM'){
        return(spid  / 1000 * 60 ** 2);
    }
}
  
//console.log(spid_km + " км/ч соответствует " + convertSpeed(spid_km, 'toMS') + " м/с");
//console.log(spid_m + " м/с соответствует " + convertSpeed(spid_m, 'toKHM') + " км/ч");
// попробуйте один вывод переписать через шаблонную строку и сравнить записи
console.log(`${spid_km} км/ч соответствует  ${convertSpeed(spid_km, 'toMS')}  м/с
${spid_m} м/с соответствует ${convertSpeed(spid_m, 'toKHM')} км/ч`);
//2
let nam = prompt("Введите число");
function absValue(znah){
    if(znah<0){
        znah *=-1;
    }
    return(znah);
}
console.log(absValue(nam));

//3
let student = {
    group: 201,
    last_name: " Иванов",
    first_name: " Иван "
};

console.log("Список свойств: " + Object.keys(student));
console.log("Студент" + student.first_name + student.last_name + "в "+ student.group + " группе");

//4
function randomNumber(min, max){
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}
console.log(randomNumber(3, 35));

//5
let mas_2=[];
function sampleArray(mas, count){
    while (count>0) {
        mas_2.push(randomNumber(0,mas.length));
        count--;
    }
    return(mas_2);
}

console.log(sampleArray([1,2,3,4],32));