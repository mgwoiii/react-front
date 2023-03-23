import React, { useState, useRef , useCallback, useEffect} from 'react';
import './App.css';
import TodoTempleate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import axios from 'axios';
const App = () => {
  
  useEffect(() => {
      console.log('useEffect on mounting');
      axios.get('/dataTest')
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
  },[]);

  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트의 기초 알아보기',
      checked : true,
    },
    {
      id : 2,
      text : '컴포넌트 스타일링해 보기',
      checked : true,
    },
    {
      id : 3,
      text : '일정 관리 앱 만들어 보기',
      checked : false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false,
      };

      setTodos(todos.concat(todo));
      nextId.current +=1;
    },
    [todos],
  );

  return (
  <TodoTempleate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} />
  </TodoTempleate>);
};

export default App;
