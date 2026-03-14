import path from 'path';
const filePath = './data/example.txt'; //definimos ruta
const dirName = path.dirname(filePath); // obtenemos el directorio base
console.log('directorio base:',dirName);
const baseName = path.basename(filePath, '.txt'); //obtenemos el nombre del archivo sin extencion 
console.log('nombre del archivo: ', baseName);
const extName = path.extname(filePath); //obtener extension del archivo
console.log('extencion del archivo: ', extName);
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('nueva ruta: ', newPath);