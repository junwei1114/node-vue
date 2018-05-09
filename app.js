const express = require('express')
const path = require('path')
const app = express()


var history = require('connect-history-api-fallback');  //需现在静态中间件上方
app.use(history())


app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000,()=>{
    console.log(1111)
})