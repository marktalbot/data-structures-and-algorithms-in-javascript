'use strict';

// See exercise here:
// https://github.com/kuychaco/algoClass/blob/master/data-structures/stack.js

class Stack {
    constructor(capacity = 10) {
        this.capacity = capacity;
        this.counter = 0;
        this.storage = {};
    }

    push(value) {
        this.storage[this.counter] = value;
        this.incrementCounter();
    }

    pop() {
        let keys = Object.keys(this.storage);

        if (keys.length === 0) {
            return null;
        }
        let lastKeyAdded = this._getLastKeyAdded();
        let lastElementAdded = this.storage[lastKeyAdded];
        delete this.storage[lastKeyAdded];

        return lastElementAdded;
    }

    peek() {
        let lastKeyAdded = this._getLastKeyAdded();
        return this.storage[lastKeyAdded];
    }

    count() {
        return Object.keys(this.storage).length;
    }

    incrementCounter() {
        this.counter++;
    }

    _getLastKeyAdded() {
        let keys = Object.keys(this.storage);

        if (keys.length === 0) {
            return null;
        }

        return keys.sort((a, b) => b - a)[0];
    }
}

module.exports = Stack;
