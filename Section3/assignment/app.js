const http = require('http');

const reqHandler = (req, res) => {
    const url = req.url

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Add user</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send</input></button></form></body>')
    }

    if(url === '/users'){
        res.write('<html>')
        res.write('<head><title>Users</title></head>')
        res.write('<body><ul>')
        res.write('<li>UserA</li>')
        res.write('<li>UserB</li>')
        res.write('<li>UserC</li>')
        res.write('<li>UserD</li>')
        res.write('</ul></body>')
        res.write('</html>')
    }

    if(url === '/create-user'){
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        })
        req.on('end', () => {
            console.log(body)
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.end();
}

const server = http.createServer(reqHandler);

server.listen(3001);