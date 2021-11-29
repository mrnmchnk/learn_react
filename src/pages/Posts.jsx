import React, { useEffect, useState, useRef } from "react";
import PostService from "../API/PostServise";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import Pagination from "../components/UI/pagination/Pagination";
import MySelect from "../components/UI/select/MySelect";
import { getPageCount } from '../components/utils/pages.js';
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePosts } from "../hooks/usePosts";
import '../styles/App.css';

function Posts() {
  // const info = { title: 'hi', text: 'how are you?' };
  // formData
  
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef();
  // console.log(lastElement);

  const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  } )

  // console.log(totalPages);


  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  })


  useEffect(() => {
    fetchPosts(limit, page)    
  }, [page, limit])


  const createPost = (newPost) => {
    setPosts( [...posts, newPost] )
    setModal(false)
  }


  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter( p => p.id !== post.id)) 
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      {/* <button onClick={fetchPosts} >GET POSTS</button> */}
      <MyButton
        style={{ marginTop: '30px' }}
        onClick={() => setModal(true) }
      >
        Создать пользователя
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}
      >
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect 
        value={limit}
        onChange={ value => setLimit(value) }
        defaultValue='Количество элементов на странице'
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'Показать все'},
        ]}
      />
      {postError &&
       <h2 style={{textAlign: 'center'}} >Произошла Ошибка {postError}</h2> 
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты'} />
      <div ref={lastElement} style={{height: 20, background: 'red'}} ></div>
      {isPostsLoading && 
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}} >
          <Loader />
        </div>
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Posts;
