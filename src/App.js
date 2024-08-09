import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Home';
import About from './About';

const config = createBrowserRouter([
  {path:"./components/Home", element:<Home/>},
  {path:"./components/About", element:<About/>}
])
function App() {

  const getUser = async() => {
    let res = await fetch("https://reqres.in/api/users")
    let serverRes = await res.json();
    console.log(serverRes['data'])
  }
  
  return (
    <div className="App">
      {/* <RouterProvider config={config}/> */}

      <Home />
      <About />

      <button onClick={getUser}> on click</button>
    </div>
  );
}

export default App;
