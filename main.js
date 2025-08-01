import { LinkedList } from './linkedList.js';

// New list
const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

// Tests
console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));
console.log(list.contains("cat"));
console.log(list.find("hamster"));