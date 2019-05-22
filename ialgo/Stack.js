class Node {
    constructor(val) {
        this.next = null;
        this.val = val;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last= newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}
const stack = new Stack();
stack.push('hi');
console.log(stack);
stack.push('world');
console.log(stack);
console.log(stack.pop());