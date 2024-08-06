function frequency() {
    let counter = 0;
    let mostTimesValue = null;
    let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

    for (let i = 0; i < arr.length; i++) {
        let counts = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counts++;
            }
        }

        if (counts > counter) {
            counter = counts;
            mostTimesValue = arr[i];
        }
    }

    return `${mostTimesValue} repeated ${counter} times`;
}

console.log(frequency());
