<?php
//https://codeforces.com/problemset/problem/231/A
$n=fgets(STDIN)
;$c=0;
for($i=0;$i<$n;$i++){
    fscanf(STDIN,'%s %s %s',$p,$t,$v);
    if($p+$t+$v>1)$c++;
}
echo$c;