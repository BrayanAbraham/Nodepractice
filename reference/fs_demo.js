const fs = require('fs');
const path = require('path');

//Create folder
//fs.mkdir(path.join(__dirname,'/test'),{},err => {
//    if(err) throw err;
//    console.log('Folder Created');
//});

//Create & write to file
//fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello world',err => {
//    if(err) throw err;
//    console.log('File Created');

//    fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I love Node.js',err => {
//        if(err) throw err;
//        console.log('File Created');
//    });
//});


// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data) => {
//     if(err) throw err;
//     console.log(data);
// });


//rename
// fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),err => {
//     if(err) throw err;
//     console.log('File Renamed');
// });