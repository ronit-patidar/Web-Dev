var arr = [1, 2, 3, 4, 5, 4, 3, 1, 2, 4, 2, 4, 2, 4, 2, 4, 2, 3, 2, 2222, 0, 444];
var maxNum = Number.MAX_SAFE_INTEGER;
var maxNum2 = Number.MAX_SAFE_INTEGER;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < maxNum) {
        maxNum2 = maxNum;
        maxNum = arr[i];
    } else if (arr[i] < maxNum2 && arr[i] != maxNum) {
        maxNum2 = arr[i];
    }
}

console.log(maxNum,maxNum2);
