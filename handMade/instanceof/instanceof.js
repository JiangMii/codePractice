function instance(left, right) {
    right = right.prototype;
    while (true) {
        if (left === right) return true;
        if (left === null) return false;
        left = left.__proto__;
    }
}