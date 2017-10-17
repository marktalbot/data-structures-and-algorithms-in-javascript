import test from 'ava';
import Queue from '../Queue.js';

let queue;

test.beforeEach(t => {
    queue = new Queue();
});

test('It can enqueue an item onto the queue', t => {
    queue.enqueue('item1');

    t.regex(queue.storage[0], /item1/);
});

test('It can get the size of the queue', t => {
    queue.enqueue('item1');
    queue.enqueue('item2');
    queue.enqueue('item3');

    t.is(queue.size(), 3);
});

test('It can dequeue an item from the front of the queue', t => {
    queue.enqueue('item1');
    queue.enqueue('item2');
    queue.enqueue('item3');

    t.is(queue.size(), 3);
    queue.dequeue();
    t.is(queue.size(), 2);
});

test('It can return an item off the queue using the dequeue method', t => {
    queue.enqueue('item1');
    queue.enqueue('item2');
    queue.enqueue('item3');

    t.is(queue.dequeue(), 'item1');
});

test('It can dequeue an item from the front of the queue and return it', t => {
    queue.enqueue('item1');
    queue.enqueue('item2');
    queue.enqueue('item3');

    t.is(queue.size(), 3);
    t.is(queue.dequeue(), 'item1');
    t.is(queue.size(), 2);
});