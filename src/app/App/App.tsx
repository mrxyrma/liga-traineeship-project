import { Routes, Route } from 'react-router-dom';
import { PageContainer } from 'components/PageContainer';
import TaskForm from 'app/TaskForm/TaskForm';
import MainPage from 'app/MainPage/MainPage';

function App() {
  return (
    <>
      <PageContainer>
        <Routes>
          <Route path="/task_form/:id" element={<TaskForm />} />
          <Route path="/task_form" element={<TaskForm />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;
