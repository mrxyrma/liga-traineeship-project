import { Routes, Route } from 'react-router-dom';
import TaskList from 'app/TaskList/TaskList';
import TaskForm from 'app/TaskForm/TaskForm';

function App() {
  return (
    <>
      <main className="container">
        <Routes>
          <Route path="/task_form/:id" element={<TaskForm />} />
          <Route path="/task_form" element={<TaskForm />} />
          <Route path="/" element={<TaskList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
