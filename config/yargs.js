const argv = require('yargs').options({
    'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    },
    'l': {
        alias: 'lista',
        type: 'boolean',
        default: false,
        describe: 'Es la lista de la tabla de multiplicar'
    },
    'h': {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es el número hasta donde llega la tabla de multiplicar'
    }
}).check( (argv, options) => {
    if (isNaN(argv.b) || isNaN(argv.h)) {
        throw 'La base o el hasta tiene que ser un número';
    } else {
        return true;
    }
})
.argv;

module.exports = argv;