function mergeSort(arr) {
    const length = arr.length;
    if (length < 2) {
        return arr;
    }
    const centerIndex = ~~(length / 2);
    const leftArr = arr.slice(0, centerIndex);
    const rightArr = arr.slice(centerIndex);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
    const results = [];
    while (left.length && right.length) {
        const result = left[0] <= right[0] ? left.shift() : right.shift();
        results.push(result);
    }

    return [...results, ...left, ...right];
}
