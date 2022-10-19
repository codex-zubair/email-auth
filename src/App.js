import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Register from './Component/Register/Register';
import Main from './layout/Main/Main';






function App() {


  const route = createBrowserRouter([
  {
    path:'/' , element:<Main></Main>, children: [

      {
        path:'/', element:<Register></Register>
      }
    ]
  }
  ]);

   
  return (

    <div className='App'>

          <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
