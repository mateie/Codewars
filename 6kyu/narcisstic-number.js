function narcissistic(value) {
    // Code me to return true or false
    const length = value.toString().length;
    const pow = value.toString().split("").map(num => Math.pow(num, length)).reduce((initial, accum) => initial + accum);

    if(pow === value) return true;
    else return false;
}
