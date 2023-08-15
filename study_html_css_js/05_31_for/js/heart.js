for (var i=0; i<10; i++) {
    for (var j=i; j>=0; j--) document.write("♥");
    document.write("<br>");
}

document.write("<br>");

for (var i=0; i<10; i++) {
    for (var j=10; j>i; j--) document.write("♥");
    document.write("<br>");
}

var num1 = 1;
while(num1<1) console.log(num1++);

var num2 = 1;
do {console.log(num2++)} while(num2<1);

var cars = ["k7", "k5", "셀토스", "그랜져"];
for (var i=0; i<cars.length; i++) console.log(cars[i]);