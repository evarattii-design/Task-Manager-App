import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Dashboard from './pages/admin/Dashboard'
import ManageTask from './pages/admin/ManageTask'
import ManageUsers from './pages/admin/ManageUsers'
import CreateTask from './pages/admin/CreateTask'
import PrivateRoute from './routes/PrivateRoute'
import UserDashboard from './pages/user/UserDashboard'
import UserTask from './pages/user/UserTask'
import TaskDetails from './pages/user/TaskDetails'
const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        {/*Admin*/}
        <Route element={<PrivateRoute allowedRoles={["admin"]}/>}>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/tasks" element={<ManageTask/>}/>
        <Route path="/admin/create" element={<CreateTask/>}/>
        {/*users*/}
        <Route element={<PrivateRoute allowedRoles={["user"]}/>}>
        <Route path="/user/dashboard" element={<UserDashboard/>}/>
        <Route path="/user/tasks" element={<UserTask/>}/>
        <Route path="/user/task-details/id:" element={<TaskDetails/>}/>

        </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
