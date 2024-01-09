
import './App.css'

const Task = () => {
  return (
    <div>
      <input type="checkbox" />
      <strong>Tarea 1</strong>
      <button>Delete</button>
    </div>
  )
}

function App() {


  return (
    <>
      <div className='main'>
        <div className='menu'>
          <button>ALL</button>
          <button>Completed</button>
          <button>Pending</button>
        </div>

        <div className='addTask'>
          <input type="text" placeholder='Escribe algo'/>
          <button>Add</button>
        </div>

        <div className='task'>
          <input type="checkbox" />
          <strong>Tarea 1</strong>
          <button>Delete</button>
        </div>  


        <div className='task'>
          <input type="checkbox" />
          <strong>Tarea 2</strong>
          <button>Delete</button>
        </div>
      </div>
    </>
  )
}

export default App
