const http = require('http');

const server = http.createServer(function(req, res){
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.writeHead(200, { 'Content-Type': 'application/json' });

    // res.end('Hi!');
    // res.end(`
    //     {
    //         "name": "Ugwumadu Bright",
    //         "country": "University of Nigeria Nsukka",
    //         "hobby": "Coding"
    //     }
    // `);

    // res.end(`
    //     <html>
    //         <head>
    //             <title>Website</title>
    //         </head>
    //         <body>
    //             <h1>
    //                 Welcome on Board!
    //             </h1>
    //             <p> The internship is going well</p>
    //         </body>
    //     </html>
    // `);

    res.end(`
        <html>
            <head>
                <title>Website</title>
            </head>
            <body>
                <h1>
                    Welcome on Board!
                </h1>
                <p> The internship is going well</p>
            </body>
        </html>
    `);
});

server.listen(8000, 'localhost');

console.log('Server on port 8000 created.')