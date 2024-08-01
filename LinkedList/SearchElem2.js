class Node{

    constructor(newData){

        this.data = newData;
        this.next = null;
    }
}

function insertNodeAtBeginning(head,newData){

    let HeadNode = new Node(newData);

    HeadNode.next = head  ;

    return HeadNode;

}

function printList(head){

    let curr = head;
    let res = " ";

    while(curr!= null){
        res+= " "+ curr.data;
        curr = curr.next;
    }

    console.log(res)
}

function main(){

    let header = new Node(10);

    printList(header);

    header = insertNodeAtBeginning(header, 100)

    printList(header);
}

main()