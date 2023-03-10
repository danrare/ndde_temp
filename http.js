const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("received a request");
    if(req.url === "/"){
        res.end("<h1>Welcome John Grisham</h1>");
    }
    if(req.url === "/about"){
        res.end("<h1>About us</h1>");
    }
    res.end(`
    <h1>Oops!!!</h1>
    <h2>What you are requesting for doesn't seem to exist</h2>
    `)
}).listen(4000, ()=>{
    console.log("server listening at port 4000")
})