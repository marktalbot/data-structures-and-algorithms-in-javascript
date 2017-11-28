import test from 'ava';
import Stack from '../Stack.js';

let stack;

test.beforeEach(() => {
    stack = new Stack();
});

test('It can push an item onto the stack', t => {
    stack.push('item1');
    t.regex(stack.storage[0], /item1/);
});

test('It can get the count of the stack', t => {
    stack.push('itemA');
    stack.push('itemB');
    stack.push('itemC');

    t.is(stack.count(), 3);
});

test('It can pop an item off the stack', t => {
    stack.push('itemX');
    stack.push('itemY');
    stack.push('itemZ');

    stack.pop();
    t.is(stack.count(), 2);
});

test('It can return an item off the stack using pop method', t => {
    stack.push('itemX');
    stack.push('itemY');
    stack.push('itemZ');

    t.is(stack.pop(), 'itemZ');
});

test('It can pop and return an item off the stack', t => {
    stack.push('itemX');
    stack.push('itemY');
    stack.push('itemZ');

    t.is(stack.pop(), 'itemZ');
    t.is(stack.count(), 2);
});

test('Returns null if you try to pop but no items exist', t => {
    stack.pop();
    t.is(stack.pop(), null);
});