export function sum (arr: number[]) {
    return arr.reduce(function(a, b) {
        return a + b
    }, 0)
}