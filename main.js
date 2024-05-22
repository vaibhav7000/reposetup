const fs = require('fs');

function writeFile(text){
    return new Promise(function(resolve,reject){
        fs.appendFile('b.txt',text,function(err){
            if(err){
                reject('error is present');
            } else{
                resolve('all good');
            }
        })
    })
};

function readFile(msg){
    fs.readFile('b.txt','utf-8',function(err,data){
        if(err){
            console.log('err present in reading');
        } else{
            console.log(msg);
            console.log(data);
        }
    })
};

writeFile('hi there !').then(readFile).catch(function(errMessage){
    console.log(errMessage);
})