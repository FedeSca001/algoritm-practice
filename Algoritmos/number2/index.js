let n = 0;
let plus = 0;
function iteration(){
    for (let i = 1; i < 11; i++) {
        n = n+1;
        plus = plus + n;
        console.log(n);
    }
    console.log(plus);
}
iteration();