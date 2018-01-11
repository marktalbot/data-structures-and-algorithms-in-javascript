'use strict';

// See exercise here:
// https://github.com/kuychaco/algoClass/blob/master/data-structures/stack.js

class Stack {

    constructor(capacity = 5) {
        this.capacity = capacity;
        this.counter = 0;
        this.storage = {};
    }

    push(value) {
        if (this._isMaxCapacity()) {
            return 'Max capacity already reached. Remove element before adding a new one.';
        }

        this.storage[this.counter] = value;
        this._incrementCounter();
    }

    pop() {
        if (this._isEmpty()) {
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
        return this._getKeys().length;
    }

    _incrementCounter() {
        this.counter++;
    }

    _isEmpty() {
        if (this.count() === 0) {
            return true;
        }

        return false;
    }

    _isMaxCapacity() {
        if (this.count() >= this.capacity) {
            return true;
        }

        return false;
    }

    _getKeys() {
        return Object.keys(this.storage);
    }

    _getLastKeyAdded() {
        let keys = this._getKeys();

        if (this._isEmpty()) {
            return null;
        }

        return keys.sort((a, b) => b - a)[0];
    }
}

module.exports = Stack;
