class Node{

    constructor(newData){
        this.data = newData;
        this.next = null;
    }
}

function insertAtFront(head, newData){

    const newNode = new Node(newData);

    newNode.next = head;
    return newNode;
}

function printList(head){
    let curr = head;
    let res = "";

    while(curr!= null){
        res +=" "+curr.data;

        curr= curr.next;
    }

    console.log(res)
}


function main(){
    let head = new Node(2)
    head.next = new Node(3)
    head.next.next = new Node(3)
    head.next.next.next = new Node(4)

    printList(head);

    const data = 10
    head = insertAtFront(head, data)

    printList(head)
}

main();

