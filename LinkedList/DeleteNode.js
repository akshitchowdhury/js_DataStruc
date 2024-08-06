class Node{
    constructor(newData){
        this.data = newData;
        this.next = null;
    }
}

function deleteFromBeginning(head){

    if(head===null){
        return null;
    }

    head = head.next;
    return head;
    
}

function deleteFromLast(head){
    if (head === null) {
        return null;
    }

    if (head.next === null) {
        return null;
    }

    let curr = head;
    

    while (curr.next.next != null) {
        curr = curr.next; //keep travelling until second last node is not reached
    }

    // Set the second last node's next pointer to null
    curr.next = null; //this curr.next here is already the 2nd last node now

    return head;
}

function deleteFromMiddle(head, position){

    let curr = head;
    let prev = null

    if(prev<=0 || head===null){
        return head;
    }

    if(position===1){
        return head.next;
    }

    for(let i=0; i<position && curr!=null; i++){
        prev = curr;
        curr = curr.next;
    }

    if(curr===null){
        return head;
    }

    prev.next = curr.next;

    return head;
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

    let header = new Node(12);
    header.next = new Node(13);
    header.next.next = new Node(14);
    header.next.next.next = new Node(15);

    printList(header);

    header = deleteFromLast(header);

    printList(header);
}

main();