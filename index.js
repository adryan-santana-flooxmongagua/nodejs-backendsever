const http = require('http'); 

let server = http.createServer((req, res) => { 

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    switch (req.url) 
    {
        case '/':

            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end('<h1>olá</h1>')
            break;
    
       case '/users':

            res.statusCode = 200;
            res.setHeader('Content-type', 'application/json');
            res.end(JSON.stringify({
                users:[{
                      name: 'Hcode',
                      email:'Ctt@gmaill.com.br',
                      id:1
                }]
            }));
            break;
            
    }

});

server.listen(3000, '127.0.0.1', () => {

    console.log('Servidor rodando!!!');
    
});
