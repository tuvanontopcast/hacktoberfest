import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment';
import Post from 'App/Models/Post';



export default class CommentsController {
  public async index ({params, view}: HttpContextContract) {

    const postid = params.postid;
    const post = await Post.find(postid)
    await post?.load('comments')

    return view.render('comments/comments', {post:post})
  }

  
  public async store ({params, request, view}: HttpContextContract) {
    console.log(params)
    console.log(request)
    const postid = params.postid;
    const data = request.all();

    if(data.poster && data.comment){
      const comment = await Comment.create({postId: postid, poster: data.poster, comment: data.comment})
    }

    const post = await Post.find(postid)
    await post?.load('comments')

    return view.render('comments/comments', {post:post}) 
  }

}
