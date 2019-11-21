/**
 * Insert console.time(functionName) at the top of each function
 * Insert console.timeEnd(functionName) at the end of the function before return statement (if it exists)
 */

module.exports = function asyncAwaitSafe() {
    return {
        name: 'asyncAwaitSafe',
        visitor: {},
    }
};
