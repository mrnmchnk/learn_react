import React, {useState, useRef} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import Card from "./components/Card";
import GetCard from "./components/GetCard";

function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description' },
    {id: 2, title: 'Javascript 2', body: 'Description' },
    {id: 3, title: 'Javascript 3', body: 'Description' },
  ]);
  
  const [post, setPost] = useState({title: '', body: ''});
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  
  const addNewPost = (e) => {
    e.preventDefault()
    setPosts( [...posts, {...post, id: Date.now()}] );
    setPost({title: '', body: ''})
  };
  const info = { title: 'hi', text: 'how are you?' };


  return (
    <div className="App">
      <form action="">
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={ e => setPost({...post, title: e.target.value}) }
          type="text"
          placeholder='Название поста'
        />
        <MyInput
          value={post.body}
          onChange={ e => setPost({...post, body: e.target.value}) }
          type="text"
          placeholder='Описание поста'
        />
        <MyButton onClick={addNewPost}>Создать Пост</MyButton>
      </form>
      <PostList posts={posts} title={'Посты про JS'} />
    </div>
  );
}

export default App;
