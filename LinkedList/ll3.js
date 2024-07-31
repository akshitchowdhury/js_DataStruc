class Node{
    
    constructor(newData){
        this.data = newData;
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

        result += ""+current.data;
        current = current.next;
    }

    console.log(result)
}

function insertAtEnd(newData, head){
    let current = head;
    
    let lastNode = new Node(newData);
    while(current.next!=null){
        current = current.next;
        
    }

    current.next = lastNode;

    return lastNode;
    
}

function main(){

    let Header  =new Node(1)
    Header.next = new Node(2);
    Header.next.next = new Node(3);
    Header.next.next.next = new Node(4);

    listTravel(Header);

    Header = insertAtFront(Header, 10)

    listTravel(Header);

    insertAtEnd(20,Header)
    listTravel(Header);
}

main()