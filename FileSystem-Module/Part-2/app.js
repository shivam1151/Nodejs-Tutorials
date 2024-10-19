// Here we will learn to work on folders

const fs = require('fs');

// creating a folder

fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("successfully created the folder");
    }
})

// deleting a folder  --> fs.mkdir is used to delete folders which i have no file or we can 
//                        say it is used to delete empty folders.To overcome this problem 
//                        we use fs.rm to delete all the files inside the folder.


fs.rm('tutorial', { recursive: true, force: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Folder successfully deleted');
    }
});

// Creating a folder and files within it

fs.mkdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        fs.writeFile('./tutorial/example.txt','Hello everyone',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("successfully created file");
            }
        })
    }
})