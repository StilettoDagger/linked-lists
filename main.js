import LinkedList from "./LinkedList.js";
// Tests

const list = new LinkedList();

list.append(4);
list.append(5);
list.prepend(1);



console.log(list.toString());
console.log(list.size);

console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2));

console.log(list.pop());
console.log(list.toString());
console.log(list.size);

console.log(list.toString());

console.log(list.contains(5));
console.log(list.contains(4));

console.log(list.find(4));
console.log(list.toString());
list.insertAt(3, 1);
console.log(list.toString());
console.log(list.size);
console.log(list.removeAt(2));
console.log(list.toString());
console.log(list.size);
list.prepend(5);
console.log(list.toString());
console.log(list.size);

list.append(8);
console.log(list.toString());


console.log(list.find(5));
console.log(list.find(3));

console.log(list.size);


list.pop();
list.pop();
list.pop();
console.log(list.toString());
console.log(list.size);
list.pop();
list.pop();

console.log(list.toString());