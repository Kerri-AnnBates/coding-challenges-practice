// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    let jumpNum1 = 0;
    let jumpNum2 = 0;
    let position1 = x1;
    let position2 = x2;

    if (v2 > v1) {
        return "NO";
    }

    do {
        position1 += v1;
        jumpNum1++;

        position2 += v2;
        jumpNum2++;
    } while (position1 !== position2);

    if (jumpNum1 == jumpNum2) {
        return "YES";
    } else {
        return "NO";
    }

}

console.log(kangaroo(0, 3, 4, 2)); // passing
// console.log(kangaroo(21, 6, 47, 3)); // test case failing