
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_info',function(table){
    table.increments()
    table.string('username')
    table.string('password')
    table.string('song_title')
    table.string('line_one')
    table.string('line_two')
    table.string('line_three')
    table.string('line_four')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_info')
};
