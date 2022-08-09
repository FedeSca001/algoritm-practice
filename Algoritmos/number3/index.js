/*
Crear una lista con los caracteres de un texto, en lugar de los espacios colocar un "*"
*/
const text = "Déjame ver           que hay para saborear esta vuelta La carta no está siempre a tu alcance en los matutinos"

const list = [];

function iterar (){
    if(text.length > 1){ 
        for(let i = 0; i < text.length; i++){
            let n = i
            if(text[n] === ' '){
                console.log('*');
                list.push('*');
            } else {
                console.log(text[n]);
                list.push(text[n]);
            }
        }
    }
}
iterar();