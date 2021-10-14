const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
module.exports = class Stack {
  push(element) {
    let l = Object.keys(this).length
    this[l] = element

    return this
  }

  pop() {
    let l = Object.keys(this).length - 1
    let delElement = this[l]
    delete this[l]

    return delElement
  }

  peek() {
    let l = Object.keys(this).length

    return this[l - 1]
  }
}
//npm run test ./ test/st-stack.test.js
