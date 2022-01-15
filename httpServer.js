const http = require('http');


// Constants
const PORT = 8088;
const server = http.createServer((req,res) =>{
  if (req.url=== '/')
  {
    res.write('Hello world - NodeJS starting web page');
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


  if (req.url === '/api/grocery/diary'){
    res.write(JSON.stringify(['Milk','Butter','Cheese']));
    res.end();  
  }

});

// App
server.listen(PORT)
console.log('Http server listening on port 8088')