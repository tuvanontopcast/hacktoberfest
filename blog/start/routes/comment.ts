import Route from '@ioc:Adonis/Core/Route'


Route.get('/comments/:postid', 'CommentsController.index').as('comments.index')
Route.post('/comments/:postid', 'CommentsController.store').as('comments.store')
