fs = require('fs');

path = 'C:/Users/karaverm/Desktop/sample1.json';

var x = new Promise(
	(resolve, reject) => {
		fs.readFile(path, (err, data)=>{
			if(err){
				reject('some error');
			}
			else{
				resolve('file read or whatever');
				console.log(data.toString());
			}
		});
	}
);

x.then((result=>{
	console.log(result);
}, err=>{
	console.log(err);
})).catch(err=>{
	console.log(err);
});