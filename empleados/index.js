// https://codeforces.com/problemset/problem/935/A

process.stdin.on('data',
    (n) => {
        let solucion = 0;
        for (let i = 1; i <= Number(n)/2; i++) {
            if (Number(n) % i===0) {
                solucion++
            }
        }
        console.log(solucion);
    });
    /*
     var num = parseInt(data.toString())
    
    console.log(solution(num))
    */