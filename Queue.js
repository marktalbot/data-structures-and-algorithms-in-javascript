'use strict';

/**
 * Queue data structure using only an object
 */
class Queue {
    constructor() {
        this.storage = {};
        this.counter = 0;
    }

    /**
     * Adds value to back of queue
     * @param  {any} value    Value to add to queue
     * @return {number}       Size of queue
     */
    enqueue(value) {
        this.storage[this.counter] = value;
        this.counter++;

        return this.size();
    }

    /**
     * Removes value from front
     * @return {any} Removed value
     */
    dequeue() {
        let index = Object.keys(this.storage)[0];
        let value = this.storage[index];

        delete this.storage[index];

        return value;
    }

    peek() {
        let index = Object.keys(this.storage)[0];
        let value = this.storage[index];

        return value;
    }

    count() {
        // number of elements in queue
    }

    /**
     * Returns size of queue
     * @return {number} Size of queue
     */
    size() {
        return Object.keys(this.storage).length;
    }
}

module.exports = Queue;
