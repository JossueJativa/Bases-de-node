const fs = require('fs');

const crearTabla = async (base = 5, lista, hasta) => {
    try{
        let salida = '';
        salida += '==================\n';
        salida += `    Tabla del ${base}\n`;
        salida += '==================\n';
        for (let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if (lista) {
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    }catch (err) {
        throw err;
    }
}

module.exports = {
    crearTabla
};
