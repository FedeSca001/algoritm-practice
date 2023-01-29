// https://codeforces.com/problemset/problem/59/A

process.stdin.addListener("data", (e)=>{
    let input = e.toString().trim();
    let contadorMayuscula = (input.match(/[A-Z]/g)||[]).length 
    contadorMayuscula > (input.length - contadorMayuscula) ? 
        console.log(input.toUpperCase()) : 
        console.log(input.toLowerCase());
})