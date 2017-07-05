const pg = require('./knex')

function adduserinfo(obj){
  return pg('user_info').insert(obj)
}

function allusers(){
  return pg('user_info').select()
}

module.exports = {
  adduserinfo,
  allusers
}
