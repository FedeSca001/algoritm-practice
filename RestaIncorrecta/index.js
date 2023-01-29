// https://codeforces.com/problemset/problem/977/A

process.stdin.on('data',(e) => {
    let [n, k] = String(e).split(' ').map(Number);
    while (k > 0) {
        k--
        n%10 === 0 ? n = n/10 : n--
    }
    console.log(n);
});