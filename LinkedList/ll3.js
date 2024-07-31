class Node{
    
    constructor(newData){
        this.newData = data;
        this.next = null;
    }
}

function insertAtFront(head,newData){

    let frontNode = new Node(newData)

    frontNode.next = head;

    return frontNode;

}

function listTravel(head){

    let current = head;
    let result = "";

    while(current!= null){

        result+= ""+current.data;
        current = current.next;
    }

    console.log(result)
}


function main(){

    let Header  =new Node(1)
    Header.next = new Node(2);
    Header.next.next = new Node(3);
    Header.next.next.next = new Node(4);

    printList(Header);

    Header = insertAtFront(Header, 10)

    printList(Header);
}