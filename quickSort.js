function quickSort(arr) {
    const length = arr.length;
    if (length <= 1) {
        return arr;
    }
    const pivot = arr[length - 1];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < length - 1; i++) {
        const current = arr[i];
        current < pivot ? leftArr.push(current) : rightArr.push(current);
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
