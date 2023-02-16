//1
const spid_km = 36, spid_m = 20;
console.log(spid_km + " км/ч соответствует " + spid_km * 1000 / 60 / 60 + " м/с");
console.log(spid_m + " м/с соответствует " + spid_m / 1000 * 60 ** 2 + " км/ч");


//2
const A = 5, B = 4, C = 3;
if (A + B > C && A + C > B && B + C > A) {
    console.log("Треугольник существует");
    let P = (A + B + C) / 2;
    console.log("Периметр треугольника равен " + P * 2);
    let S = Math.sqrt(P * (P - A) * (P - B) * (P - C));
    console.log("Площадь треугольника равна " + S);
    console.log("соотношение " + P * 2 / S);


} else {
    console.log("Треугольник не существует");
}



//3
let nam = prompt("Введите число");
if (nam >= 0 && nam % 1 == 0) {
    let count = 0;
    while (nam > count) {
        if (count % 5 == 0) {
            console.log(count + " fizz buzz");
        } else if (count % 2 == 0) {
            console.log(count + " buzz");
        } else {
            console.log(count + " fizz");
        }
        count++;
    }
} else {
    console.log("вы ввели не число или отрицательное число");
}


//4
let D_el=10,count=1;
while(D_el>count){
    console.log("*".repeat(count));
    console.log("#".repeat(count+1));
    count+=2;
}
console.log("||");


//5
let bol = true;
count = 0, nam = 32;
while (bol) {
    let nam_2 = prompt("отгадайте число");
    if(nam_2%1==0){
        if(nam==nam_2){
            console.log("угадано");
            break;
        }else if(nam_2>nam){
            console.log("ваше число больше");
        }else{
            console.log("ваше число меньше");
        }
    }else{
        console.log("вы ввели не число");
    }
}


//6

n = prompt("Введите число n");
x = prompt("Введите число x");
y = prompt("Введите число y");
if(n%1==0 && x%1==0 && y%1==0){
    if(n%x==0 && n%y==0){
        console.log("n = "+n +", x = "+x+", y = "+y+" => true");
    }else{
        console.log("n = "+n +", x = "+x+", y = "+y+" => false");
    }
}


//7
let month = prompt("Введите месяц");
if(month>=0 && month<=3){
    console.log("месяц " + month + " => 1 квартал");
}else if(month>=4 && month<=6){
    console.log("месяц " + month + " => 2 квартал");
}else if(month>=7 && month<=9){
    console.log("месяц " + month + " => 3 квартал");
}else if(month>=10 && month<=12){
    console.log("месяц " + month + " => 4 квартал");
}
