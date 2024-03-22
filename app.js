require('@colors/colors');

const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear(); //Limpiar la consola
// Como vienen desde consola
// const [ , , arg3 = 'base=5'] = process.argv;
// const [, base ] = arg3.split('=');

// yargs
// console.log(argv);
// console.log('base: yargs', argv.base);

crearTabla(argv.base, argv.lista, argv.hasta)
    .then( nombreArchivo => {
        if (argv.lista) {
            console.log(nombreArchivo.magenta, 'creado');
        } else {
            console.log('Creado el archivo: ', nombreArchivo.yellow);
        }
    })
    .catch( err => console.log(err));