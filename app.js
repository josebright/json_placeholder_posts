const fs = require('fs');
const got = require('got');

function fetch(){
    got('http://jsonplaceholder.typicode.com/posts', { json: true }).then(response => {
    console.log(response.body);
    temp = response.body;
    fs.writeFile('/result/posts.json', temp, (err)=> {
        if(err){
            return console.log(err);
        }
        console.log("The file was saved!");
        });
    }).catch(error => {
        console.log(error);
    });
};

fetch();