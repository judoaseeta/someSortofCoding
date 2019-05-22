class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
        this.left = null;
        this.right = null;
    }
    containHelper(targetVal, currentNode = this.root) {
        if(currentNode.val === null) {
            return false;
        } else if (currentNode.val === targetVal) return true;
        return targetVal> currentNode.val ? this.containHelper(targetVal, currentNode.right) : this.containHelper(targetVal, currentNode.left);
    }
    contains(val) {
        return this.containHelper(val, this.root);
    }
    insertHelper(newNode, currentNode) {
        if(newNode.val > currentNode.val && currentNode.right === null) {
             currentNode.right = newNode;
             return this;
        } else if (newNode.val < currentNode.val && currentNode.left === null) {
            currentNode.left = newNode;
            return this;
        }
        return newNode.val > currentNode.val ? this.insertHelper(newNode, currentNode.right) : this.insertHelper(newNode, currentNode.left);
    }
    insert(val) {
        let newNode = new Node(val);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        return this.insertHelper(newNode, current);
        /*
        while(true) {
            console.log(current);
            if(val ===  current.val) {
                return this;
            } else if(val < current.val) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if(val >  current.val) {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
        */
    }

}
const newTree = new Tree();
newTree.insert(45);
newTree.insert(55);
newTree.insert(58);
console.log(newTree.contains(55));