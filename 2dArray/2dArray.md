# 2D Array - DS
Given a 6x6 2D Array, `arr`.

```
let arr = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0]
]

```

An hour glass in A is a subset with indices falling in this pattern in arr's graphical representation:
```
a b c
  d  
e f g
```

There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum of every hourglass in `arr`, then print the maximum hourglass sum. The array will always be 6x6.