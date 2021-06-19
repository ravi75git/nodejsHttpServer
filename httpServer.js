const http = require('http');


// Constants
const PORT = 9000;
const server = http.createServer((req,res) =>{
  if (req.url=== '/')
  {
    res.write('HELLO world');
    res.end();
  }

  if (req.url === '/api/books'){
    res.write(JSON.stringify(['Harry Potter','James Bond','Sherlock Holmes']));
    res.end();  
  }

  if (req.url === '/api/stores'){
    res.write(JSON.stringify(['Mobile','Wireless Mouse','Headset']));
    res.end();  
  }


});

// App
server.listen(PORT)
console.log('Http server listening on port 9000')