//child process is a node module used to create sub proces wirthin a script
//you can perform differnt task
//cp module
const cp=require('child_process')
/*console.log('open Calculater')
cp.exec('calc')
cp.exec('start chrome https://www.pepcoding.com/resources/online-java-foundation/patterns')*/
console.log("output" + cp.execSync('node strings.js'))