import { Task } from './components/Task';
import './App.css'


function App() {

  return (
    <>
      <div className='main'>
        <div className='menu'>
          <button className='buttonMenu'>All</button>
          <button className='buttonMenu'>Completed</button>
          <button className='buttonMenu'>Pending</button>
        </div>

        <div className='addTask'>
          <input type="text" placeholder='Escribe algo'/>
          <button className='buttonDelete'>Add</button>
        </div>

        <Task></Task>
        <Task></Task>

      </div>
    </>
  )
}

export default App
