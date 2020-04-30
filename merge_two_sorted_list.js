// [1, 2, 4]
// [1, 3, 4]

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
var mergeTwoLists = function (l1, l2) {
	let current1 = l1;
	let current2 = l2;
	let lastLink = null;
	let newList = new ListNode();

	// Instantiate the linked list with a head, which is first value in the first linked list.
	// update current to the next linked item in the list.
	// Set last link to the newly created linked list, to keep track of the last element in the list for future updates.

	console.log("Initial:", newList);

	if (l1 == null && l2 == null) {
		return l1;
	}

	if (l1 !== null) {
		newList = new ListNode(current1.val);
		current1 = current1.next;
		lastLink = newList;
	} else if (l2 !== null) {
		newList = new ListNode(current2.val);
		current2 = current2.next;
		lastLink = newList;
	}

	console.log(newList)
	console.log(current2)



	while ((current1 !== null) || (current2 !== null)) {


		if (current2 !== null) {
			lastLink.next = new ListNode(current2.val);
			current2 = current2.next;
			lastLink = lastLink.next;
		}

		if (current1 !== null) {
			lastLink.next = new ListNode(current1.val);
			current1 = current1.next;
			lastLink = lastLink.next;
		}

	}

	return newList
};