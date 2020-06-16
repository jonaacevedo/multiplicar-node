const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'imprime por consola la tabla de multiplicar', opts)
    .command('crear', 'Crea archivo txt de la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}