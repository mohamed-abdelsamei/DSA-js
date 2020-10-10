class LinkedList {
    size = 0;
    head = null;
    constructor(head = null) {
        this.head = head
    }

    add(data) {
        let node = new ListNode(data)
        if (!this.head) {
            this.head = node

        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++;
    }

    insert(element, location) {
        if (location > this.size) {
            return false;
        } else {

            let current, previous;
            let node = new ListNode(element)
            current = this.head
            if (location == 0) {
                node.next = this.head
                this.head = node
            } else {
                let i = 0;
                while (i < location) {
                    previous = current
                    current = current.next
                    i++;
                }
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }
    remove(location) {
        let current, previous;
        if (this.size < location) return false
        let i = 0;
        current = this.head;
        while (i < location) {
            current = current.next
            previous = current
            i++
        }
        previous = current.next
        this.size--;
        return current.data
    }

    indexOf(element) {
        let current;
        current = this.head
        let index = -1;
        while (current.data !== element) {
            current = current.next;
            index++;
        }
        return index;
    }
    isEmpty() {
        return this.size === 0;
    }

    print() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }


}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


let list = new LinkedList()
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(5)
list.add(6)
list.add(7)
list.add(8)
list.insert(11, 4)
// console.log(list.remove(4))
console.log(list.indexOf(11))
list.print()