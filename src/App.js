import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';

function App() {
  
  const [tasks, setTasks] = useState({
    title: "",
    completeStatus: "",
    id: ""
  });
  const [lists, setLists] = useState([]);
  console.log(lists);


  const inputHandler = (e) => {
    setTasks(e.target.value);
    console.log(setTasks);


  };

  const addList = (e) => {
    setLists((taskItems) => {
      return [...taskItems, tasks];
    });
    setTasks("");
  };

  const deleteHandler = (id) => {
    console.log("deleted");
    // let newTasks = [...tasks];
    // newTasks = newTasks.filter(task=> index !== id)

    setLists((taskItems) => {
      return taskItems.filter((list, index) => {
        return index !== id;
      });

    });
  };



  return (

    <div className="App">
      <div className="Todoapp">
        <h1>TODO APP</h1>
        <div className="Wrapper">
          <input type="text" onChange={inputHandler} value={tasks} />
          <button onClick={addList}>+</button>
        </div>
        {lists.map((list, index) => {
          return <TodoInput
            key={index}
            id={index}
            list={list}
            onSelect={deleteHandler} />
        })
        }


      </div>

    </div>

    



  )
}

export default App;
