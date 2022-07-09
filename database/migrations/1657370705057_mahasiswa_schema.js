'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MahasiswaSchema extends Schema {
  up () {
    this.create('mahasiswas', (table) => {
      table.increments()
      table.string('nama')
      table.string('prodi')
      table.string('nim')
      table.timestamps()
    })
  }

  down () {
    this.drop('mahasiswas')
  }
}

module.exports = MahasiswaSchema
