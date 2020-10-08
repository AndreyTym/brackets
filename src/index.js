module.exports = function check(str, bracketsConfig) {
    let config = new Map(bracketsConfig);
    let stack = [];
    for (let i of str.split("")) {
        if (stack.length && i === config.get(stack[stack.length - 1])) {
            stack.pop();
        } else if (config.has(i)) {
            stack.push(i);
            // } else {
            //     if (i !== config.get(stack.pop())) return false;
        }
    }
    return stack.length === 0;
};
