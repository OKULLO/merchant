import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import MediaPage from './pages/Media'
import Login from './pages/Login'
import PrivateRoute from './utils/PrivateRoute'
import { useSelector } from 'react-redux'








function App() {
  const user = useSelector((state) => state?.auth?.user)
  return (
     <Router> 
      <Routes>
      <Route
          path="/"
          index element={
           
              <Login/>
          
          }
        />
        <Route
          path="/app"
          index element={
           <PrivateRoute>
              
              <Home/>
              </PrivateRoute>
          
          }
        />
        
        <Route
          path="/media"
          index element={
           <PrivateRoute>
              <MediaPage/>
              </PrivateRoute>
          
          }
        />
        </Routes>
         </Router> 
  );
}

export default App;
