import http from 'http';
//crear servidor basico
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content_Type', 'text/plain');
    res.end('hola mundo!');
})

// configuracion para escuchar el puerto 3000

server.listen(3000, '127.0.0.1', ()=>{
    console.log('Servidor corriendo en http://127.0.0.1');
});