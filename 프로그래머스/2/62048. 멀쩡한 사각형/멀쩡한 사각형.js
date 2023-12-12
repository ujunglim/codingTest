function solution(w, h) {
    const gcd = getGCD(w, h);
    return w*h-(w+h-gcd);
}
function getGCD(w, h) {
    if (h === 0) {
        return w;
    }
    return getGCD(h, w%h);
}