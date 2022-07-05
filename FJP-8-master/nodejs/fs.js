const fs=require('fs')
const path= require('path')
//1. file ko read kaise karey(reading a file)
//let content =fs.readFileSync('f1.txt')
//console.log(content.toString())
//fs.writeFileSync('f2.txt', 'this is new file')
//fs.unlinkSync('f2.txt')
//console.log('file deleted')



//directories///
//creation of directory
//mkdirSync(method)
//fs.mkdirSync('mydoc')
//delete a directory
//fs.rmdirSync('mydoc')
//let doesExist=fs.existsSync('website')
//console .log(doesExist)
//let folderContent=fs.readdirSync('C:\\Users\\hp\\Downloads\\FJP-8-master\\FJP-8-master\\javascript')
//console.log(folderContent)
let srcFilepath= "C:\\Users\\hp\\Downloads\\FJP-8-master\\FJP-8-master\\javascript\\function.js"
let desFolder="C:\\Users\\hp\\Downloads\\FJP-8-master\\FJP-8-master\\nodejs"
let tobecopiedfile=path.basename(srcFilepath)
console.log(tobecopiedfile)
let destpathcompelete= path.join(desFolder, tobecopiedfile)
fs.copyFileSync(srcFilepath , destpathcompelete)
