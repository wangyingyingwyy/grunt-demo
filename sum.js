const add=require('./calc.js');

if(process.argv.length!==4){
    console.log('sum x y');
    process.exit(0);
}
var x=Number( process.argv[2]);
var y=Number( process.argv[3]);

console.log(`${x}+${y}=${add(x,y)}`);
