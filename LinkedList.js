import Node from "./Node.js";

export default class LinkedList {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	append(value) {
		if (this.tail === null) {
			this.tail = new Node(value);
			this.head = this.tail;
		} else {
			this.tail.next = new Node(value);
			this.tail = this.tail.next;
		}
		this.size++;
	}

	prepend(value) {
		if (this.head === null) {
			this.head = new Node(value);
			this.tail = this.head;
		} else {
			this.head = new Node(value, this.head);
		}
		this.size++;
	}

	at(index) {
		let temp = this.head;
		let i = 0;

		if (index >= this.size || index < 0) {
			throw RangeError("Index is out of bounds.");
		}

		while (temp !== null) {
			if (i === index) {
				return temp;
			}
			temp = temp.next;
			i++;
		}
	}

	pop() {
		if (this.size === 0) {
			console.log("There is nothing to pop in this list!");
			return null;
		}
		const temp = this.tail;
		if (this.size === 1) {
            this.head = null;
			this.tail = null;
            this.size = 0;
			return temp;
		}
		const prev = this.at(this.size - 2);
		prev.next = null;
		this.tail = prev;
        this.size--;
		return temp;
	}

	contains(value) {
		let temp = this.head;

		while (temp !== null) {
			if (temp.value === value) {
				return true;
			}
			temp = temp.next;
		}
		return false;
	}

	find(value) {
		let i = 0;

		let temp = this.head;
		while (temp !== null) {
			if (temp.value === value) {
				return i;
			}
			temp = temp.next;
			i++;
		}

		return null;
	}

	toString() {
		let temp = this.head;

		let listStr = "";

		while (temp !== null) {
			listStr += `( ${temp.value} ) -> `;
			temp = temp.next;
		}
		listStr += "null";
		return listStr;
	}

	insertAt(value, index) {
		if (index === 0) {
			this.prepend(value);
			return;
		}
		if (index === this.size) {
			this.append(value);
			return;
		}
		if (index < 0 || index > this.size) {
			throw RangeError("Invalid index.");
		}
		const prevNode = this.at(index - 1);
		const newNode = new Node(value, this.at(index));
		prevNode.next = newNode;
		this.size++;
	}

	removeAt(index) {
		if (index < 0 || index >= this.size) {
			throw RangeError("Invalid index.");
		}
		if (index === this.size - 1) {
			return this.pop();
		}

		this.size--;
		if (index === 0) {
			let temp = this.head;
			this.head = this.head.next;
			temp.next = null;
			return temp;
		}
		const curr = this.at(index);
		const next = curr.next;
		const prev = this.at(index - 1);
		prev.next = next;
		curr.next = null;
		return curr;
	}
}
