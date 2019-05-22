class Node {
    constructor(val) {
        this.next = null;
        this.val = val;
    }
}
class Q {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const temp = this.tail ;
            temp.next = newNode;
            this.tail = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if(!this.head) return null;
        const result = this.head;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return result.val;
        }
        this.head = result.next;
        this.size--;
        return result.val;
    }
}
const qq = new Q();
console.log(qq.enqueue('first'));
console.log(qq.enqueue('second'));
console.log(qq.enqueue('third'));
console.log(qq.dequeue());
console.log(qq);