var fs=require('fs')
var http=require('http') 

fs.writeFileSync('mla.txt','hallo ali',{flag:'a'})
var m=fs.readFileSync('./mla.txt','utf8')

http.createServer((req,res)=>{
if(req.url==='/a'){
    res.write('aljsdaf')
    res.end()}
res.write('hallo')
res.end()
}).listen(1000)