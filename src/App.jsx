import TodoListHeader from './components/TodoListHeader';
import TodoList from './components/TodoList';
// import './App.css'; // Styles

function App() {
  return (
    <div>
      <header>
        <div>
          <TodoListHeader header="To Do -list" />
        </div>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
