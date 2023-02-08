// 10--20--30

class LinkedList {
    constructor(data) {
        this.head = { value: data, next: null }
        this.tail = this.head
        this.length = 1;
    }

    append(data) {
        let newNode = { value: data, next: null }
        this.tail.next = newNode
        this.tail = newNode
        this.length++;
    }

    prepend(data) {
        let preNewNode = { vale: data, next: null }
        preNewNode.next = this.head
        this.head = preNewNode
        this.length++;
    }

    // // will create an function here as traversing
    // traversing(reqIndex){
    //      let counter = 0;
    //      let correntNode = this.head
    // //    will run the loopnew
    //      while(counter != reqIndex){
    //         correntNode = correntNode.next
    //         counter++
    //      }return correntNode
    // }

    // Insert(index, data){
    //     let newNode = {value:data, next:null}

    //     let leaderNode = this.traversing(index-1);
    //     let nextNode = leaderNode.next

    //     leaderNode.next = newNode;
    //     newNode.next = nextNode;
    //     // this.length++;

    // }

    traversing(reqIndex) {
        let counter = 0;
        let correntNode = this.head

        while (counter != reqIndex) {
            counter++
            correntNode = correntNode.next

        } return correntNode
    }
    Insert(index, data) {
        let newNode = { value: data, next: null }
        let leaderNode = this.traversing(index - 1)
        let nextNode = leaderNode.next
        leaderNode.next = newNode
        newNode.next = nextNode
        this.length++;

    }

    delete(index) {
        let leaderNode = this.traversing(index - 1)
        let unwantedNode = leaderNode.next
        let nextNode = unwantedNode.next
        leaderNode.next = nextNode
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

    reverse() {
        let firstNode = this.head
        this.tail = this.head // last write it
        let secondNode = firstNode.next

        while(secondNode){
            let temp = secondNode.next
            secondNode.next = firstNode

            firstNode = secondNode
            secondNode = temp
        }
        this.head.next = null
        this.head= firstNode
    }

    // delete Node direct instud of taking suppoer by head
   
}


const mylist = new LinkedList(100)
mylist.append(200)
mylist.prepend(300)
mylist.Insert(1, 555)
mylist.delete(1)
mylist.print();
mylist.reverse()
console.log(mylist)


