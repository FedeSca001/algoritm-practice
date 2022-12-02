/*
Un millonario ha comprado una red social y no trae buenas noticias.
Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo,
habrá que compensarlo con dos horas extra otro día de ese mismo año.

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y 
están preparando un programa que les diga el número de horas extras que harían en el año 
si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es de lunes a viernes.
Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos,
devuelve el número de horas extra que se harían ese año:
*/
const Yr = 2023;
const H = ["01/06", "04/01", "12/25"]; // formato MM/DD

function countHours(year, holidays) {
        let countLaboral = 0;
        let countHoliDays = 0;
        for (strg of holidays) {
                let stringMonth = `${strg[0]}${strg[1]}`;
                let stringDay = `${strg[3]}${strg[4]}`;
                const fechaComoCadena = `${year}-${stringMonth}-${stringDay}`;
                const numeroDia = new Date(fechaComoCadena).getDay();
                numeroDia === 0 || numeroDia === 6
                        ? countLaboral++
                        : countHoliDays++;
        }
        let totalHoursYear = countHoliDays * 2;
        return totalHoursYear;
}
countHours(Yr, H);