import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Calendar from './Components/Calendar/Calendar';
import DateManager from './Components/DateManager/DateManager';
import TaskRedactor from './Components/TaskRedactor/TaskRedactor';
import Notifications from './Components/Notifications/Notifications';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' >
          <Calendar />
          <Notifications />
        </Route>
        <Route path='/date/:dateValue'>
          <DateManager />
        </Route>
        <Route path='/date/:dateValue/edit/:id'>
          <TaskRedactor />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
