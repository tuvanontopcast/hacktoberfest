/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import './routes/comment';
import './routes/post';
/*
import Route from '@ioc:Adonis/Core/Route'

//Route.get('/', async ({ view }) => {
//  return view.render('welcome')
//})
Route.get('/', ({response})=>{
  //response.redirect().toPath('/posts')
  response.redirect().toRoute('home')
})

Route.get('/posts', 'PostsController.index').as('home')
Route.get('/posts/create', 'PostsController.create').as('create')
Route.get('/posts/:id', 'PostsController.show').as('show')
Route.post('/posts', 'PostsController.store').as('store')
Route.get('/posts/:id/edit', 'PostsController.edit').as('edit')
Route.post('/posts/:id/update', 'PostsController.update').as('update')
Route.get('/posts/:id/delete', 'PostsController.destroy').as('delete')

*/