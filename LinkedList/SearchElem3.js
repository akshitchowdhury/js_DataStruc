class Node{
    constructor(newData){
        this.data = newData;
        this.next = null;
    }
}

function insertFront(head, newData){

    let frontnode = new Node(newData);

    frontnode.next = head;

    return frontnode;
}

function printList(head){

    let curr  = head;
    let res = "";

    while(curr!=null){
        res+= " "+curr.data;
        curr = curr.next; 
    }

    console.log(res)
}

// function searchElement(head, key){

//     let curr = head;

//     while(curr!=null){

//         if(curr.data===key){
//             return "element is present"
//         }

//         curr = curr.next;
        
//     }

//     return "not present"
// }

function inserAfterNode(head, key, newData){

    let curr = head;
    let newNode  =new Node(newData);

    while(curr!= null){

        if(curr.data===key){
            newNode.next = curr.next;
            curr.next = newNode
        }
        curr = curr.next;
    }
    return head;
}

function main(){

    let Head = new Node(10);

    Head.next = new Node(20);
    Head.next.next = new Node(30);
    Head.next.next.next = new Node(40);

    printList(Head);
    
    Head = insertFront(Head,0)

    printList(Head);

    Head = inserAfterNode(Head, 20, 200)

    printList(Head)
    // console.log( searchElement(Head,200))
}


main()