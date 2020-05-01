/**
 * Initialize your data structure here.
 */

var MyQueue = function () {
	this.list = [];
	this.size = 0;
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	// Push element to the queue using a stack.
	this.list.push(x);
	this.size += 1;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	// Since list is a stack, I have to reverse it first then do pop. Pop is removing last element, in in a queue we want to remove the first element.
	const temp = this.list.reverse().pop();
	this.list.reverse() // Reverse list back to implement stack
	this.size -= 1;
	return temp;

};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	// Since the list is really a stack, return the first element in the list instead of the last.
	return this.list[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	return this.size == 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */