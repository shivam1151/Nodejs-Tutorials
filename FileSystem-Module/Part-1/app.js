// Here we will learn to how to work on files
const fs = require('fs');

//create a file 

fs.writeFile('example.txt',"this is an example",(err)=>{
    if(err){
        console.log(err);
    }
    else
    {
        console.log("File successfully created");

        // Reading a file 

        fs.readFile('example.txt','utf-8',(err,data)=>{
            if(err)
            {
                console.log(err);
            }
            else{
                console.log(data);
            }
        })
    }
})

// rename the file 

fs.rename('example.txt','example2.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully renamed the file");
    }
})

// Append data to the file

fs.appendFile('example2.txt','Some data being appended',(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("successfully appended data to file");
    }
})

// Deleting a file

fs.unlink('example.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully deleted the file");
    }
})