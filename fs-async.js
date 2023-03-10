const {readFile, writeFile} =  require("fs");

const asyncFile = readFile("./content/first.txt", (err, result)=>{
    if(err){
        
        console.log(err);
    }
    const first = result;

    readFile("./content/second.txt", (err, data)=>{
        if(err){
            console.log(err)
        }

        const second = data;
        
        writeFile("./content/async-file", "Welcome to asynchronous programming", {flag:"a"}, (err, data)=>{
            if (err){
                console.log(err);
            }
            console.log(data);
        })
    })
})
