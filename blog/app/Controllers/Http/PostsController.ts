import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
//import { validator, schema } from '@ioc:Adonis/Core/Validator';
import CreatePostValidator from 'App/Validators/CreatePostValidator';

/*interface Post {
  id: number;
  title: string;
  body: string;
}

const posts : Post[] = [{         
  id: 1,          
  title: 'Hello AdonisJS',         
  body: 'Adonis includes everything you need to create fully functional web app or an API server.'     
}, {          
  id: 2,          
  title: 'VueJS',          
  body: 'Vue is a progressive framework for building user interfaces.'     
} ] 



function count():any{
  let post = posts[posts.length - 1];
  let result:number = Number(post.id) + 1;
  return result;
}*/

export default class PostsController {

  async index({view}:HttpContextContract){
    //return posts
    //const posts = await Post.all()
    //return view.render('post', {posts: posts})

    const posts = await Post.query().withCount('comments', (query)=>{
        query.as('commentsCount')
    });

    //console.log(posts)

  return view.render('post', {posts: posts})
  }

  async show({params, view}:HttpContextContract){
    const id = params.id
    const post = await Post.find(id)
    //const post = posts.find((p)=> p.id == Number(id)) 
    //return post

    //const posts = await Post.query().preload('comments');
    //console.log(posts);

    return view.render('detail', {post: post})
  }

  async create({view}:HttpContextContract){
    return view.render('create')
  }

  async store({request, response}:HttpContextContract){
    //const title = request.input('title')
    //const body = request.input('body')

    /*const postSchema = schema.create({
      tilte: schema.string(),
      body: schema.string()
    })*/

    /*
    await validator.validate({
      schema: postSchema,
      messages:{
        required: 'The {{ field }} is required!'
      },
      data:{
        title: title,
        body: body
      }
    })*/

    /*const payload = await request.validate({
      schema: postSchema,  
      messages:{
        required: 'The {{ field }} is required!'
      }
    })*/
    const payload = await request.validate(CreatePostValidator)

    const title = payload.title
    const body = payload.body

    const post = new Post()
    post.title = title
    post.body = body
    await post.save()
    ////const newId = posts.length +1
    //const newId = count();
    //const newPost: Post = {id: newId, title: title, body: body}
    //posts.push(newPost)

    response.redirect().toRoute('home')
  }

  async edit({params, view}:HttpContextContract){
    const id = params.id
    const post = await Post.find(id)
   // const post = posts.find( (p) => p.id == Number(id))
    return view.render('edit', {post: post})
  }

  async update({params, request, response}:HttpContextContract){
    const id = params.id

    const payload = await request.validate(CreatePostValidator)
    const title = payload.title
    const body = payload.body

    const post = await Post.find(id)
    post!.title = request.input('title')
    post!.body = request.input('body')

    post!.title = title
    post!.body = body

    await post?.save()
    //const index = posts.findIndex(p => p.id == Number(id))
    //posts[index].title = request.input('title')
    //posts[index].body = request.input('body')

    response.redirect().toRoute('home')
  }

  async destroy({params, response}:HttpContextContract){
    const id = params.id
    const post = await Post.find(id)
    await post?.delete()
    //const index = posts.findIndex(p => p.id == Number(id))
    //posts.splice(index, 1)

    response.redirect().toRoute('home')
  }

}
