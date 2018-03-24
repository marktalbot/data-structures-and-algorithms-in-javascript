'use strict';

// See exercise here:
// https://github.com/kuychaco/algoClass/blob/master/data-structures/stack.js

const INDEX_NOT_FOUND = -1;
const ZERO_BASED_INDEX_OFFSET = 1;

class Stack {

    constructor(capacity = 5) {
        this.capacity = capacity;
        this.counter = 0;
        this.storage = {};
        this._minStack = [];
    }

    push(value) {
        if (this._isMaxCapacity()) {
            return 'Max capacity already reached. Remove element before adding a new one.';
        }

        this.storage[this.counter] = value;
        this._incrementCounter();

        if (this._valueIsLowest(value)) {
            this._pushToMinStack(value);
        } else {
            this._pushToMinStack(this.min());
        }

        return this.count();
    }

    pop() {
        if (this._isEmpty()) {
            return null;
        }

        let lastKeyAdded = this._getLastKeyAdded();
        let lastElementAdded = this._getLastItemAdded();
        delete this.storage[lastKeyAdded];

        return lastElementAdded;
    }

    peek() {
        return this._getLastItemAdded();
    }

    count() {
        return this._getKeys().length;
    }

    min() {
        return this._minStack[this._minStack.length - 1];
    }

    sort() {
        // Sort a stack so that its elements are in ascending order
    }

    contains(value) {
        let values = this._getValues();

        return values.includes(value);
    }

    until(value) {
        let values = this._getValues().reverse();
        let indexOfValue = values.indexOf(value);

        if (this._valueNotFound(indexOfValue)) {
            return 'Value not found';
        }

        return indexOfValue + ZERO_BASED_INDEX_OFFSET;
    }

    _valueIsLowest(value) {
        if (this._minStack.length === 0) {
            return true;
        }
        return value < this._minStack[this._minStack.length - 1];
    }

    _pushToMinStack(value) {
        this._minStack.push(value);
    }

    _valueNotFound(index) {
        return index === INDEX_NOT_FOUND;
    }

    _incrementCounter() {
        this.counter++;
    }

    _isEmpty() {
        return this.count() === 0;
    }

    _isMaxCapacity() {
        return this.count() >= this.capacity;
    }

    _getKeys() {
        return Object.keys(this.storage);
    }

    _getValues() {
        return Object.values(this.storage);
    }

    _getLastKeyAdded() {
        let keys = this._getKeys();

        if (this._isEmpty()) {
            return null;
        }

        return keys.sort((a, b) => b - a)[0];
    }

    _getLastItemAdded() {
        return this.storage[this._getLastKeyAdded()];
    }
}

module.exports = Stack;
