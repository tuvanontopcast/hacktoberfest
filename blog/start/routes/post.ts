import Route from '@ioc:Adonis/Core/Route'

Route.get('/', ({response})=>{
  response.redirect().toRoute('home')
})

Route.get('/posts', 'PostsController.index').as('home')
Route.get('/posts/create', 'PostsController.create').as('create')
Route.get('/posts/:id', 'PostsController.show').as('show')
Route.post('/posts', 'PostsController.store').as('store')
Route.get('/posts/:id/edit', 'PostsController.edit').as('edit')
Route.post('/posts/:id/update', 'PostsController.update').as('update')
Route.get('/posts/:id/delete', 'PostsController.destroy').as('delete')