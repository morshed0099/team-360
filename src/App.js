
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
