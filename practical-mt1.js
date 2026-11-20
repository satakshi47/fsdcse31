const fs= require('fs');

//create the file

fs.writeFile("student2.txt","helllo, this file is for student ", (err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("file sucessfully created ");
    }
});

//read the file

fs.readFile("student2.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log("read the file");
        console.log(data);
    }
});
//update  the file

fs.appendFile("student2.txt","I'm satakshi btech 3rd semester student", (err)=>{
    if(err)throw err

    else{
        console.log("updated sucessfully");
    }
});

//delet the file

fs.unlink("student.txt",(err)=>{
    if(err)throw err
    else{
        console.log("delet sucessfully");
    }
});