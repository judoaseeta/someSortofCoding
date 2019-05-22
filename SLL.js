class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    get value() {
        return this.val;
    }
}


class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
       if(!this.head) return undefined;
       let current = this.head;
       let newTail = current;
       while(current.next) {
           newTail = current;
           current = current.next;
       }
       this.tail = newTail;
       this.tail.next = null;
       this.length--;
       return current;
    };
    unShift(val) {
        const newHead = new Node(val);

        if(!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    shift() {
        let newHead = this.head.next;
        const currentHead = this.head;
        this.head = newHead;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    get(i) {
        if(i <= 0 || i > this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== i) {
            current = current.next;
            counter++;
        }
        return current;
    }
    insert(i, val) {
        if(i < 0 || i > this.length) return null;
        const newNode = new Node(val);
        const prevNode = this.get(i -1);
        const nextOfNew = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextOfNew;
        this.length++;
        return true;
    }
    set(i , val) {
        const founded = this.get(i);
        if(founded) {
            founded.val = val;
            return true;
        }
        return false;
    }
    remove(i) {
        if( i < 0 || i >= this.length) return null;
        if(i === this.length - 1) this.pop();
        if(i === 0) this.shift();
        const prevNode = this.get(i - 1);
        const removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
const list = new SLL();
list.push('first');
list.push('second');
list.push('third');
console.log(list.head);

console.log(list.unShift('new First'));
console.log(list.get(2));
console.log(list.insert(2, 'new Two'));
console.log(list);
console.log(list.set(1, 'new One'));
console.log(list);
console.log(list.reverse());