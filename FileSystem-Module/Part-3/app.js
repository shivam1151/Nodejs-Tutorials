// usage of rmdir and rm

const fs = require('fs');

fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.writeFile('./tutorial/example.txt','I am learning Nodejs',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("file and folder created successfully");
            }
        })
    }
})

fs.unlink('./tutorial/example.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.rmdir('tutorial',(err)=>{
            if(err){
                console.log("hello");
            }
            else{
                console.log("folder and file deleted successfully")
            }
        })
    }
})