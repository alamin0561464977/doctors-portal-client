import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routers/routers';

function App() {
  return (
    <div className=" container mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
