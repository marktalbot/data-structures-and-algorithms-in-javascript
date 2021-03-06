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

test('It can peek at the last item in the stack', t => {
    stack.push('itemX');
    stack.push('itemY');
    stack.push('itemZ');

    t.is(stack.peek(), 'itemZ');
});

test('Peek does not remove an item from the stack', t => {
    stack.push('itemX');
    stack.push('itemY');
    stack.push('itemZ');

    stack.peek();

    t.is(stack.count(), 3);
});

test('Returns error message when adding another item once max capacity is reached', t => {
    // Max capacity is set to 5
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');
    stack.push('item4');
    stack.push('item5');

    t.is(stack.count(), 5);
    t.is(stack.push('item6'), 'Max capacity already reached. Remove element before adding a new one.');
    t.is(stack.count(), 5);
});

test('Does not add another item if max capacity is reached', t => {
    // Max capacity is set to 5
    stack.push('item1');
    stack.push('item2');
    stack.push('item3');
    stack.push('item4');
    stack.push('item5');

    stack.push('item6');
    t.is(stack.count(), 5);
});

test('It returns true if value is contained within stack', t => {
    stack.push('itemX');
    stack.push('itemY');
    stack.push('itemZ');

    t.is(stack.contains('itemY'), true);
});

test('It returns false if value is not contained within stack', t => {
    stack.push('itemX');
    stack.push('itemY');
    stack.push('itemZ');

    t.is(stack.contains('something else'), false);
});

test('It gets the number of pops until reaching a specfic value', t => {
    stack.push('A');
    stack.push('B');
    stack.push('C');
    stack.push('X');
    stack.push('Y');

    t.is(stack.until('C'), 3);
});

test('It returns an error message when calling "until" if a specfic value is not present', t => {
    stack.push('A');
    stack.push('B');
    stack.push('C');
    stack.push('X');
    stack.push('Y');

    t.is(stack.until('something'), 'Value not found');
});

test('It returns the minimum item in the stack (numeric values only)', t => {
    stack.push(5);
    stack.push(111);
    stack.push(2);
    stack.push(12);
    stack.push(4);

    t.is(stack.min(), 2);
});
