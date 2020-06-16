const argv = require('./config/yargs.js').argv
const colors = require('colors')
const { crearArchivo } = require('./multiplicar/multiplicar.js')
const { listarTabla } = require('./multiplicar/multiplicar.js')

let comando = argv._[0]
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
}






/* let argv2 = process.argv */
/* console.log('Limite', argv.limite); */
/* let parametro = argv[2]
let base = parametro.split('=')[1] */