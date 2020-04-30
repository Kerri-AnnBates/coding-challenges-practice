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
	let newList = new ListNode(0); // Instantiate the linked list with a head, which is first value in the first linked list.
	let lastLink = newList; // Set last link to the newly created linked list, to keep track of the last element in the list for future updates.

	while ((current1 !== null) || (current2 !== null)) {
		// If list 1 is null just set last link to list 2 item and move on.
		if (current1 === null) {
			lastLink.next = current2;
			current2 = current2.next;
			break;
		}

		// If list 2 is null set last link to list 1 item and break;
		if (current2 === null) {
			lastLink.next = current1;
			current1 = current1.next;
			break;
		}

		// If list 1 item is less than list 2 item, add list 1 to the new linked list else if list 2 item is less than list 1 item, add list 2 item to new linked list. else if they're equal just add to linked list in order of list 1, then list 2 item.
		if ((current1 && current1.val < current2.val)) {

			lastLink.next = new ListNode(current1.val);
			current1 = current1.next;
			lastLink = lastLink.next;

		} else if ((current2 && current2.val < current1.val)) {

			lastLink.next = new ListNode(current2.val);
			current2 = current2.next;
			lastLink = lastLink.next;

		} else {

			lastLink.next = new ListNode(current1.val);
			current1 = current1.next;
			lastLink = lastLink.next;
			lastLink.next = new ListNode(current2.val);
			current2 = current2.next;
			lastLink = lastLink.next;

		}

	}


	return newList.next;
};