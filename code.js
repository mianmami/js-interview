

class linkNode{
  constructor(val=0, next=null){
    this.val = val
    this.next = next
  }
}
var MyLinkedList = function() {
  this.size = 0
  this.head = null
  this.tail = null
  
};

// MyLinkedList.prototype.createList = function(array){
//   let head = new linkNode()
//   let currentNode = head
//   for(let i=0; i<array.length; i++){
//     let tempNode = new linkNode(array[i])
//     currentNode.next = tempNode
//     currentNode  = tempNode
//   }
//   this.size = array.length
//   this.head = head.next
//   this.tail = currentNode
// }

// let myList = new MyLinkedList();
// myList.createList([1,2,3,4,5])
// console.log(myList)



let t = "23424"
let ttmp = t
let ttmp = t.replace('2', '1')
console.log(t);