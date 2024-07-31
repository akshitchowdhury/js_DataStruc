
class Node{
    constructor(newData){
        this.data  =newData;
        this.next = null;
    }
}

function insertNodeAtBeginning(head,newData){

    let headNode = new Node(newData);

    headNode.next = head;


    return headNode;
    
}

function printList(head){

    let curr = head;
    let res = "";

    while(curr!= null){
        res += " "+curr.data;
        curr = curr.next; 
    }

    console.log(res)
}

function searchElement(head, key){
        if(key== head.data){
            console.log("Head is the only key")
        }
        let curr = head;
        while(curr!= null){

            if(curr.data===key){
                
                console.log("yes")
                return;
            }
            
            curr = curr.next;
            
        }
        console.log("not present")
}

function main(){

    let Head = new Node(10);


Head = insertNodeAtBeginning(Head, 20)

    printList(Head)

    Head = insertNodeAtBeginning(Head, 30)
    Head = insertNodeAtBeginning(Head, 40)
    Head = insertNodeAtBeginning(Head, 50)
    Head = insertNodeAtBeginning(Head, 60)

    printList(Head)

    searchElement(Head, 40)
}

main();