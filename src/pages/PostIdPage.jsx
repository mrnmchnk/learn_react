import React, { useEffect, useState } from 'react'
import { useParams,  } from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
import PostService from '../API/PostServise';
import Loader from '../components/UI/Loader/Loader';
import MyButton from '../components/UI/button/MyButton';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching( async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchComments, isComloading, comError] = useFetching( async (id) => {
    const response = await PostService.getCommentsByPostId(id)
    setComments(response.data)
  })


  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])

  return (
    <div>
      <h1>Вы открыли страницу поста c ID = {params.id}!</h1>
      {isLoading
        ?
        <Loader/>
        :
        <div>{post.id}. {post.title}</div>
      }
      <MyButton //onClick={ () => router(`/posts/${props.post.id}`) } 
      >
        Сохранить
      </MyButton>
      <h2 style={{marginTop:'30px'}} >
        Комментарии:
      </h2>
      {isComloading
        ?
        <Loader/>
        :
        <div>
          {comments.map( comm => 
            <div key={comm.id} style={{marginTop: 15}}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default PostIdPage;