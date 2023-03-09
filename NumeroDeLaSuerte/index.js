// https://codeforces.com/problemset/problem/110/A

process.stdin.addListener("data", (data) => {
    let count = 0
    let arr = data.toString().trim()
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
        element == '7' || element == '4' ? count += 0 : count ++
    }
    console.log(count > 0 ? 'NO' : 'YES');
})