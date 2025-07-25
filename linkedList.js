class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.headNode) {
            this.headNode = newNode;
            return;
        }

        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode
    }

    prepend(value) {
        const newNode = new Node(value, this.headNode); 
        this.headNode = newNode;
    }

    size() {
        let count = 0;
        let current = this.headNode;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    head() {
        return this.headNode;
    }

    tail() {
        let current = this.headNode;
        if (!current) {
            return null;
        }
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    at(index) {
        let current = this.headNode;
        let count = 0;
        while (current && count < index) {
            current = current.nextNode;
            count++;
        }
        return current || null;
    }

    pop() {
        if (!this.headNode) {
            return null;
        }
        if (!this.headNode.nextNode) {
            const val = this.headNode;
            this.headNode = null;
            return val;
        }

        let current = this.headNode;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }

        const val = current.nextNode;
        current.nextNode = null;
        return val;
    }

    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.headNode;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let str = "";
        let current = this.headNode;
        while (current) {
            str += "( " + current.value + " ) -> "
            current = current.nextNode;
        }
        str += "null";
        return str;
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        const previous = this.at(index - 1);
        if (!previous) {
            return;
        }
        const newNode = new Node(value, previous.nextNode);
        previous.nextNode = newNode;
    }

    removeAt(index) {
        if (index === 0 && this.headNode) {
            this.headNode = this.headNode.nextNode;
            return;
        }
        const previous = this.at(index - 1);
        if (!previous || !previous.nextNode) {
            return;
        }
        previous.nextNode = previous.nextNode.nextNode;
    }
}

export default LinkedList;