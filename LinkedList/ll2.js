class Node{

    constructor(newData){
        this.data= newData;
        this.next = null;
    }
}

function insertNodeFront(head, newData){

    const FrontNode = new Node(newData);

    FrontNode.next = head;

    return FrontNode;
}

function printList(head){

    let current = head;
    let result = "";

    while(current!= null){
        result += " "+current.data;
        current = current.next;
    }

    console.log(result);
}

function main(){
    let head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);

    printList(head)
head = insertNodeFront(head,10)

printList(head)
}

main()