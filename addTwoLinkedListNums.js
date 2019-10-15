var addTwoNumbers = function(l1, l2) {
	let dummy = new ListNode(0);
	let cur = dummy;
	let sum = 0;
	let p1 = l1;
	let p2 = l2;
	while (p1 != null || p2 != null) {
		if (p1 != null) {
			sum += p1.val;
			p1 = p1.next;
		}
		if (p2 != null) {
			sum += p2.val;
			p2 = p2.next;
		}
		cur.next = new ListNode(sum % 10);
		sum = parseInt(sum / 10);
		cur = cur.next;
	}
	if (sum === 1) {
		cur.next = new ListNode(1);
	}
	return dummy.next;
};