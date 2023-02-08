// 222-->20-->50-->100
  //  \4/ inserting
// // Lets will make the LinkedList
// let LinkedList = {
//   head:{
//     value:10,
//     next:{
//         value:20,
//         next:{
//             value:30,
//             next: null
//         }
//     }
//   }
// }


class LinkedList {
    constructor(data){
        this.head = {value:data, next:null}
        this.tail = this.head
        this.length= 1;
    }





// class LL {
//     constructor(data){
//         this.head={value:data, next:null}
//         this.tail = this.head
//         this.length = 1;
//     }
// }
// const myNew = new LL(20)
// console.log(myNew)


// class Nll {
//     constructor(data){
//         this.head = {value:data, next:null}
//         this.tail=this.head
//         this.length=1;
//     }
// }

// const myN = new Nll(30)
// console.log(myN)

append(data) {
     let newNode = {value:data, next:null}
     this.tail.next = newNode
     this.tail=newNode
     this.length++;
}

prepend(data){
    let newNode1 = {value:data, next:null}
    newNode1.next = this.head
    this.head=newNode1
    this.length++;
}

}
const myList = new LinkedList(20)
myList.append(50)
myList.append(100)
myList.prepend(222)
console.log(myList)

