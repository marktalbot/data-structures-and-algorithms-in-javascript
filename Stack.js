'use strict';

/**
 * Stack data structure using only a String to store data
 */
class Stack {

    constructor() {
        this.storage = '';
        this.delimiter = ':';
    }

    push(value) {
        this.storage = this.storage.concat(this.delimiter, value);
    }

    pop() {
        let cursor = this.storage.lastIndexOf(this.delimiter);
        let poppedValue = this.storage.slice(cursor + this.delimiter.length);
        this.storage = this.storage.substring(0, cursor);

        return poppedValue;
    }

    size() {
        let size = 0;
        for (var i = this.storage.length - 1; i >= 0; i--) {
            if (this.storage[i] === this.delimiter) {
                size++;
            }
        }

        return size;
    }
}

module.exports = Stack;