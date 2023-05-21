// import logo from './logo.svg';
import "./styles.css" //taken from webdiv
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState("")

  function addnewtodo(){let todoitem = document.getElementById("todo").value
            setTodo(todoitem)};
  return (
    <div className="App">
      <h1>Roy's TODO App </h1>
      <p>
      The count is {count}
      </p>

      <button onClick={() => setCount(count + 1) }>Counter</button>

      <br></br>
      <br></br>

      <form className="new-item-form" >
        <div className="form-row">
        <label htmlFor="todo"> New Todo</label>
        <input type='text' id="todo"></input>
        <br></br>

        </div>
      </form>
      <button className="btn" onClick={addnewtodo}>Add</button>
      <ul>
        <li >
            {todo}
        </li>
      </ul>
      

      {/* <form>
        <label> New Todo</label>
        <input type='text' id="todo2" placeholder="New todo"></input><br></br>
        <button>include</button>
      </form> */}
    
    
    </div>
  );
}

export default App;
