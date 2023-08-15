var fruit = ["apple", "banana", "cat"];
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit.length);

// 뒤에 추가
fruit.push("Dog");
console.log(fruit);

// 제일 앞에 추가
fruit.unshift("Elephant");
console.log(fruit[fruit.length-1]);

// 뒤에 있는 요소 pop
console.log(fruit.pop());
console.log(fruit);

// i, j : i부터 j개 제거
fruit.splice(1, 2)
console.log(fruit);

// 자르기, 합치기
fruit = ["a", "b", "c", "d"];
var fruit2 = fruit.slice(1, 3);
console.log(fruit2);
var fruit3 = fruit.concat(fruit2);
console.log(fruit3);

console.log(fruit);
fruit.reverse();
console.log(fruit);