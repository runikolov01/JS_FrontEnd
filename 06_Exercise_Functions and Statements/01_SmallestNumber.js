function findSmallestNumber(first, second, third) {
    let smallest = first;
    if (second < smallest) {
        smallest = second;
    }
    if (third < smallest) {
        smallest = third;
    }
    console.log(smallest)
}
findSmallestNumber(2, 5, 3);