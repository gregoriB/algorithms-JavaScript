const bubbleSort = arr => {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1; j++) {
            const current = arr[j];
            const next = arr[j + 1];
            if (current > next) {
                arr[j] = next;
                arr[j + 1] = current;
            }
        }
    }

    return arr;
};
