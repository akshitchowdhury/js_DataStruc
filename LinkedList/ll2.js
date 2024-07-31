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
    let header = new Node(1);
    header.next = new Node(2);
    header.next.next = new Node(3);
    header.next.next.next = new Node(4);

    printList(header)
    header = insertNodeFront(header,10)

printList(header)
}

main()