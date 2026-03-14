import fs from 'fs';
//leer un archivo

fs.readFile('./data/example.txt', 'utf8', (err, data) =>{
    if (err) throw err;
    console.log('Contenido del archivo:', data);

});

// escribir un nuevo archivo
fs.writeFile('./data/newfile.txt', 'contenido nuevo', (err) => {
    if (err) throw err;
    console.log('Archivo creado y escrito');
});

//Renombrar un archivo
fs.rename('./data/newfile.txt', './data/ranamedfile.txt', (err) => {
    if(err) throw err;
    console.log('Archivo renombrado');
});