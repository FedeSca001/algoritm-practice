// https://codeforces.com/problemset/problem/469/A

const rln = require('readline').createInterface( {input: process.stdin, output: process.stdout} );
 
let inputs = [];
 
rln.on( 'line', (line) =>{
  inputs.push( line );
  if( inputs.length == 3 ){
    const gameLevels = +inputs[0];
    
    let x = inputs[1].split(' ');
    let y = inputs[2].split(' ');
    
    x.shift();
    y.shift();
    
    ( new Set( [...x, ...y] ).size === gameLevels ) ?
        console.log( "I become the guy." ) : 
        console.log( "Oh, my keyboard!" );
    
        rln.close();
  }
}
)