// class Pen{
//     constructor(name,color,price){
//         this.name=name
//         this.color=color
//         this.price=price
//     }
//     showPrice(){
//         console.log(`Price of ${this.name} is ${this.price}`)
//     }
// }

// This Node started from the tail
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = { value: value, next: null };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    }
    insert = (index, value) => {
        const newNode = new Node(value);
        let count = 1;
        let currentNode = this.head;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
    }

    deleteTail() {
        let currentNode = this.head;
        while (currentNode.next.next !== null) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
    }

    deleteHead() {
        this.head = this.head.next;
        this.length--;
    }

    print() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr.join(" - ");
    }

    search(key) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value == key) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    deleteNode(index) {
        let count = 1;
        let currentNode = this.head;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        currentNode.next = currentNode.next.next;

        // newNode.next = currentNode.next;
        // currentNode.next = newNode;
        this.length--;
        return this;
    }
}
let l1 = new LinkedList(1);
l1.append(2);
l1.append(22);
l1.append(222);
l1.append(33);
l1.append(456).append(88).append(654)
l1.print();
// console.log(l1);
console.log(l1. append())  
// console.log(l1. print());
// console.log(l1. search());