'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')

Route.get('/','MahasiswaController.index').as('index')
Route.get('/create','MahasiswaController.create').as('mahasiswa.create')
Route.get('/edit/:id','MahasiswaController.edit').as('mahasiswa.edit')
Route.post('/store','MahasiswaController.store').as('mahasiswa.store')
Route.post('/edit/:id','MahasiswaController.update').as('mahasiswa.update')
Route.get('/delete/:id','MahasiswaController.delete').as('mahasiswa.delete')
