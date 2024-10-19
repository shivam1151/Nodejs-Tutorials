const fs = require('fs');
fs.readdir('./tutorial','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        for(let file of data){
            fs.unlink('./tutorial/'+file,(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log("file deleted successfully");
                }
            })
        }
    }
})