const core = require('@actions/core');
const github = require('@actions/github');

try {
    // 1. Obtener el input definido en el action.yml
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`¡Hola ${nameToGreet}!`);

    // 2. Obtener información del contexto de GitHub (opcional)
    const time = new Date().toTimeString();
    core.setOutput('time', time);

    // 3. Mostrar algo de información en el log de la action
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`El evento que disparó la action fue: ${payload}`);

} catch (error) {
    // Manejo de errores: marca la action como fallida
    core.setFailed(error.message);
}