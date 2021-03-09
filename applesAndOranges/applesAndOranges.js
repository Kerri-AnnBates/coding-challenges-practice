function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let aCount = 0;
    let bCount = 0;


    apples.forEach(apple => {
        let total = a + apple;

        if (total >= s && total <= t) {
            aCount++;
        }
    });

    oranges.forEach(orange => {
        let total = b + orange;

        if (total >= s && total <= t) {
            bCount++;
        }
    });

    console.log(aCount);
    console.log(bCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); // Prints 1 1