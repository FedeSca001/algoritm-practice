// https://codeforces.com/problemset/problem/546/A

process.stdin.on('data',
    (input) => {
        const [k,n,w] = String(input).split(' ')
        /*for (let i = 0; i <= w; i++) {
            k = k + (k*i);
            contadorAPagar += k;
            console.log(contadorAPagar/2);
        }*/
        console.log(k,n,w);});

/*  process.stdin.on('data', input => {
  const [k, n, w] = String(input).split(' ').map(Number)
  const cost = k*w*(w+1)/2
  console.log(Math.max(cost - n, 0))
})*/