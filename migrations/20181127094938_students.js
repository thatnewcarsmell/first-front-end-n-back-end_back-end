
exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', message => {
        message.increments('id')
        message.string('subject')
        message.boolean('read')
        message.boolean('starred')
        message.boolean('selected')
        message.specificType('labels', 'text[]')
        message.string('body')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('messages')
};