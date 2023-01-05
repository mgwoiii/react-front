import './App.css';
import TodoTempleate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () =>{
  return (
  <TodoTempleate>
    <TodoInsert />
    <TodoList />
  </TodoTempleate>);
};

export default App;
