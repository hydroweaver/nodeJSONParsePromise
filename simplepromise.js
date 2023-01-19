const x = (val) => new Promise((resolve, reject)=>{
    if(val===2){
        resolve('OK')
    }
    else{
        reject('FAIL')
    }
})



x(2).then(fulfil=>{
    console.log('ALL OK')
},reject=>{
    console.log('FAIL BRO!')
}).catch(val=>{
    console.log('INSIDE CATCH')
})

// Either mention the reject or catch
