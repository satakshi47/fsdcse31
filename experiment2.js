//firstly import fs=file system  module in ur program 
const fs=require('fs');


//create file and also write some content in file 
// fs.writeFile("student.txt","hello,thid file is for student",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file created");
//     }
// });


//now reading file content 
// fs.readFile("student.txt","utf-8",(err,data)=>{
// if(err){
//     console.log(err)
// }else{
//     console.log("read file contained");
//     console.log(data);
// }
// });


//now update file using appendFile method it will only add extra content insind exiting file student txt
// fs.appendFile("student.txt","    this is file of cse2nd year",(err)=>{
//     if(err) throw err
//     else{
//         console.log("file succesfully update");
//     }
    

// });


//now we delet the file  student 
fs.unlink("student.txt",(err)=>{
    if(err) throw err
    else{
        console.log("file delet sucessfully");
    }

});

