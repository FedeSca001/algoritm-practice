// https://codeforces.com/problemset/problem/546/A

process.stdin.on('data',
    (input) => {
        const [k,n,w] = String(input).split(' ').map(Number);
        const costo = k*w*(w+1)/2;
        console.log(Math.max(costo - n, 0));});

/*  process.stdin.on('data', input => {
  const [k, n, w] = String(input).split(' ').map(Number)
  const cost = k*w*(w+1)/2
  console.log(Math.max(cost - n, 0))
})*/