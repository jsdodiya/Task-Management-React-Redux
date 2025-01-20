
import AddTaskForm from './components/AddTask'
import TaskList from './components/TaskList'

function App() {
  

  return (
    <div>
      <h2 className="text-center text-4xl font-extrabold mt-6 mb-4 text-blue-600">Task Management App</h2>
      <AddTaskForm/>
      <TaskList/>
    </div>
  )
}

export default App
