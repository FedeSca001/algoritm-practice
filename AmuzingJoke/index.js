// https://codeforces.com/problemset/problem/141/A
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const casos = [];

readline.on('line', (line) => {
    casos.push(line);
    if (casos.length === 3) {
        let [invitado, anfitrion, mezcla] = casos;
        let letrasInvitado = invitado.split('');
        let letrasAnfitrion = anfitrion.split('');

        for (let i = 0; i < mezcla.length; i++) {
            const letraMatriz = mezcla[i];

            if (letrasInvitado.includes(letraMatriz)) {
                letrasInvitado.splice(letrasInvitado.indexOf(letraMatriz), 1);
            } else if (letrasAnfitrion.includes(letraMatriz)) {
                letrasAnfitrion.splice(letrasAnfitrion.indexOf(letraMatriz), 1);
            } else {
                console.log('NO');
                readline.close();
                return;
            }
        }

        // Si ambas listas están vacías, la mezcla es correcta
        if (letrasInvitado.length === 0 && letrasAnfitrion.length === 0) {
            console.log('YES');
        } else {
            console.log('NO');
        }

        readline.close();
    }
});
