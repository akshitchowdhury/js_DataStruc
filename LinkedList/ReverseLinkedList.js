// class Node{

//     constructor(newData){
//         this.data = newData;
//         this.next = null;
//     }
// }


// function reverseList(head){

//     let prev = null;
//     let Next;
//     let curr = head;


//     while(curr!=null){
//         Next = curr.next;
//         curr.next = prev;

//         prev= curr;
//         curr= Next;
//     }

//     return prev;
// }

// function printList(head){

//     let curr= head;
//     let res = "";

//     while(curr!=null){

//         res+= " "+curr.data;
//         curr = curr.next;
//     }

//     console.log(res);
// }


// function main(){

//     let Head = new Node(10);
//     Head.next = new Node(20);
//     Head.next.next = new Node(30);
//     Head.next.next.next = new Node(40);
//     Head.next.next.next.next = new Node(50);

// printList(Head);

// Head = reverseList(Head);
// printList(Head)
// }

// main()

let arr = [1,23,14]
let brr = [1,20,14]

console.log(arr+""+brr)