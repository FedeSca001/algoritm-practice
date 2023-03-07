// https://codeforces.com/problemset/problem/110/A

process.stdin.addListener("data", (data) => {
    let count = 0
    for (let i = 0; i < data.toString().trim().length; i++) {
        const element = data.toString().trim()[i];
        element == '7' || element == '4' ? count += 0 : count ++ 
    }
    console.log(count > 0 ? 'NO' : 'YES');
})
