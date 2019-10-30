function binarySearch(arr, val) {
    if (arr.length <= 1) {
        return arr[0] === val;
    }
    const middle = Math.floor(arr.length / 2);
    let min = 0,
        max = arr.length;
    arr[middle] <= val ? (min = middle) : (max = middle);
    const newArr = arr.slice(min, max);

    return binarySearch(newArr, val);
}
