
Function.prototype.myApply = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    let result
    result = arguments[1] ? context.fn(...arguments[1]) : context.fn();
    delete context.fn
    return result
}
