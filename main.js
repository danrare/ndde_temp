const http = require ("http");
const httpStatusCode = require("http-status-codes");
const app = http.createServer((request, response)=>{
    console.log("Recieved a request");
    response.writeHead(httpStatusCode.OK, {
        "Content-Type": "text/html"
    })

    let responseMessage = "<h1>Hello,Universe!</h1>";

    response.write(responseMessage);
    response.end();
    console.log(`Sent a response ${responseMessage}`);
});

app.listen(3000, ()=>{
    console.log("The server has started and is listening on port 3000");
})