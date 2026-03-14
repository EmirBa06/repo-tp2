import os, { totalmem } from 'os';
console.log('arquitectura del sistema:', os.arch()); //muestra la arquitectura en consola

console.log('plataforma:', os.platform()); // muestra el sistema operativo

console.log('Memoria total:', os.totalmem()); // memoria total del sistema

console.log('memoria libre', os.freemem()); // memoria libre

console.log('Informacion de la CPU:', os.cpus()); //info de la cpu
