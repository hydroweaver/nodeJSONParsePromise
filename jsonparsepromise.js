//Following tutorial at https://flaviocopes.com/nodejs-parse-json/
//Parse JSON using promises, needed to see how we can create a promise for any func

const fs = require('fs');

const parseJSONAsync = (path) => {
    return new Promise((resolve, reject)=>{
        var fileExists = fs.existsSync(path);

        if(fileExists){
            resolve("done");
        }
        else{
            reject("fail");
        }
    });
}

var path = 'C://Users//karaverm//Desktop//elk.txt';

// parseJSONAsync(path).then(
//     result => console.log(result),
//     error => console.log(error)
// );

// THE FOLLOWING FORMAT IS INCORRECT AS IT'S ESSENTIALLY ONLY COVERING FULFILLED, FOR REJECTED TO WORK
//IT NEEDS TO BE INCLUDED SEPARATELY LIKE THE EXAMPLE ABOVE AND EXAMPLE BELOW THIS ONE...

// parseJSONAsync(path).then((fulfilled, rejected)=>{
//     if(fulfilled){
//         console.log(fulfilled);
//     }
//     else if(rejected){
//         console.log(rejected);
//     }
// });

// parseJSONAsync(path).then((fulfilled)=>{
//     console.log('Fulfilled');
// }, (rejected)=>{
//     console.log('Rejected');
// });

//OBVIOUSLY EVENTUALLY WE CAN USE THE CATCH BLOCK....

parseJSONAsync(path).then(()=>{
    console.log('Success Path, File Found');
}).catch(()=>{
    console.log('Failure Path, File Not Found');
})