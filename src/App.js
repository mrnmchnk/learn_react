import React, {useState, useRef, useMemo} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import Card from "./components/Card";
import GetCard from "./components/GetCard";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description' },
    {id: 2, title: 'PHP', body: 'Description' },
    {id: 3, title: 'Python', body: 'Description' },
  ]);
  
  // const info = { title: 'hi', text: 'how are you?' };

  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')


  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТС');
    if (selectedSort) {
      return [...posts].sort( ( a, b ) => a[selectedSort].localeCompare( b[selectedSort] ) )
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter( post => post.title.toLocaleLowerCase().includes(searchQuery) )
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts( [...posts, newPost] )
  }

  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter( p => p.id !== post.id)) 
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={ e => setSearchQuery(e.target.value) }
          placeholder='Поиск...'
        />
        <MySelect
          value={selectedSort}
          onChange={ sortPosts }
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length !== 0
        ? 
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'} />
        : 
        <h1 style={{textAlign: 'center'}} >
          Посты не найдены!
        </h1>
      }
      
    </div>
  );
}

export default App;
