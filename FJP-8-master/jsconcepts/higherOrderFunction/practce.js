//1
const promise= new promise((resolve,reject)=>{
    reject(Error('some error occured'))

})
.catch(error=> console.log(error))
.then(error=> console.log(error))


