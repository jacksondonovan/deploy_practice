const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const knex = require('knex')
const linkQuery = require('./db/linkQuery')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine','hbs')
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
  res.render('index',{msg:'deploy  test  !'})
})

app.post('/sign-up',(req,res)=>{
  linkQuery.adduserinfo(req.body).then(()=>{
    res.redirect('/sign-me')
  })
})

app.get('/sign-me',(req,res)=>{
  linkQuery.allusers().then(data=>{
    console.log(data);
    // var person = {}
    // person.name = [data.username,data.password]
    // console.log(data.username);
    res.render('compose',{data:data[0].password})
  })
})

app.post('/allsongs',(req,res)=>{
  linkQuery.adduserinfo(req.body).then(()=>{
    res.redirect('/seesong')
  })
})

app.get('/seesong',(req,res)=>{
  linkQuery.allusers().then(data=>{
    var alllyrics = [data[data.length - 1].song_title,data[data.length - 1].line_one,data[data.length - 1].line_two,data[data.length - 1].line_three,data[data.length - 1].line_four]
    res.render('your_song',{lyrics:alllyrics})
  })
})



app.listen(port,(req,res)=>{
  console.log('listening on port ' + port);
})
