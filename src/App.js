
import './App.css';
import AddTask from './Component/AddTask';
import ListTask from './Component/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState(false) 
  const toggle=()=> {
    setFilter(!filter)
  }
  return (
    <div className="App">
     <div class="shadow-lg p-3 mb-5 bg-body rounded">To Do Task</div>
     <AddTask toggle={toggle} filter={filter}/>
      <div className='container'>
      
     <ListTask filter={filter}/>
     
     </div>
    </div>
  );
}

export default App;
