import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routers/routers';
import "react-datepicker/dist/react-datepicker.css";
import 'react-day-picker/dist/style.css';

function App() {
  return (
    <div className=" container mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
