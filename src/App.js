import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home'

import Login from './pages/Login'
import Orders from './pages/Orders'
import Menu from './pages/Menu'
import DailyReport from './pages/DailyReport'
import Setting from './pages/Settings'

import PrivateRoute from './utils/PrivateRoute'
import { useSelector } from 'react-redux'



function App() {
  const user = useSelector((state) => state?.auth?.user)
  return (
    <>
     <Router> 
      <Routes>
      <Route
          path="/"
          index element={<Login/>}
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
          path="/merchant/:merchantId/daily_report"
          index element={
        
              <PrivateRoute><DailyReport/></PrivateRoute>
          }
        />
        <Route
          path="/orders"
          index element={
            <PrivateRoute>
               <Orders/>
            </PrivateRoute>     
          }
        />
        <Route
          path="/menu"
          index element={ 
            <PrivateRoute>
                <Menu/>
            </PrivateRoute> 
          }
        />
        <Route
          path="/settings"
          index element={ 
            <PrivateRoute>
              <Setting/>
            </PrivateRoute>    
          }
        />
        </Routes>
         </Router> 
            <Toaster position="bottom-right"
            toastOptions={{
          className: 'bg-white dark:text-white dark:bg-slate-900 rounded-full text-sm',
       
        }}
            reverseOrder={false} />
            </>
  );
}

export default App;
