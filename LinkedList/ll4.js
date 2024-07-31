class Node{

    constructor(newData){
        this.data= newData;
        this.next = null;
    }
}

function insertFront(head, frontData){

    
    let frontNode = new Node(frontData);

    frontNode.next = head;

    return frontNode;
    
}


function insertEnd(endData, head){

    let endNode = new Node(endData);

    let current = head;

    while(current.next!=null){
        current = current.next;
    }

    current.next= endNode;

    return endNode;

}

function insertAtPoint(head, key, newData){

    let current = head;

    while(current!= null){

        if(current.data=== key)
            break;
            current = current.next;
        
    }

    if(current === null){
        return head;
    }

    let newNode = new Node(newData);

    newNode.next = current.next;
    current.next = newNode;

    return head;

}



function insertAtPosition(head, position, newData, size){

    if(position>size+1 || position<1){
        console.log("invalid position")
        return head;
    }

    let newNode = new Node(newData);

    if(position===1){
        newNode.next = head; //old head becomes second as newNode's next points to old head
        head = newNode; //newNode will be new Head
    }

    else{
        let curr = head;
        for(let i =1; i< position; i++){
            curr = curr.next;
        }

        newNode.next= curr.next; 
        curr.next = newNode;
    }
    size++;
    return head;
}


function printList(head){

    let current = head;
    let result =""

    while(current!= null){

        result += " "+current.data;
        current = current.next;
    }

    console.log(result)
}

function main(){

    let head = new Node(10);
    head.next = new Node(11);
    head.next.next = new Node(12);
    head.next.next.next = new Node(13);

    printList(head);

    // head = insertFront(head, 100)

    // printList(head)

    // insertEnd(50, head)
    // printList(head)

   head = insertAtPoint(head, 11, 200)

    printList(head)

    head = insertAtPosition(head, 2, 99)
    printList(head)
}

main();