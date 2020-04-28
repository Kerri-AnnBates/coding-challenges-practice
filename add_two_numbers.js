/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  LeetCode challenge
// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


const addTwoNumbers = function (l1, l2) {
	let reversed1 = getReveresedNumbers(l1);
	let reversed2 = getReveresedNumbers(l2);


	// Convert string of numbers to ints and add them
	let total = BigInt(reversed1) + BigInt(reversed2);
	let totalArray = total.toString().split('');
	let reversedTotal = totalArray.reverse();


	// Instatiate a new linked list
	let resultList = new ListNode(BigInt(reversedTotal[0]))

	let current = resultList

	// Convert array to linked list
	for (let i = 1; i < reversedTotal.length; i++) {
		current.next = new ListNode(BigInt(reversedTotal[i]))
		current = current.next
	}


	return resultList


};

const getReveresedNumbers = (node) => {
	let current = node;
	let intArr = []

	while (current != null) {
		intArr.push(current.val)
		let old_next = current.next;
		current = old_next;
	}

	// return string version of reversed number     
	return intArr.reverse().join('');
}

