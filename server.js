const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.set('view engine','hbs')
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
  res.render('index',{msg:'deploy  test  !'})
})

app.listen(port,(req,res)=>{
  console.log('listening on port ' + port);
})
