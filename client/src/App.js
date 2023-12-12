import { RouterProvider } from 'react-router-dom';
import './App.css';
import {router} from './route/index'
 
function App() {
  return (
     <main>
        <RouterProvider router={router} />
     </main>

  );
}

export default App;
