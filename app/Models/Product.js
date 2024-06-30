'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  user () {
    return this.belongsTo('app/Models/User')
  }

}

module.exports = Product
