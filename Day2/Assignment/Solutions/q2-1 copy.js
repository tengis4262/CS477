function add(n) {
    return 1 + process.nextTick(() => add(n - 1));
}

add(5);
