//required
const fs = require("fs");
const colors = require('colors')
const { number } = require("yargs");


let listarTabla = (base, limite) => {
    console.log('==============='.green);
    console.log(`=====tabla de base ${base}`.red);
    console.log('==============='.green);
    for (let j = 1; j <= limite; j++) {
        console.log(`${base} * ${j} = ${base * j}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('Uno de los valores no son del tipo número')
            return
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-limite-${limite}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}