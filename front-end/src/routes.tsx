import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login'
import { DashBoard } from './components/DashBoard'
import { Links } from './pages/Links'
import { getTokenFromLocalStorage, removeTokenFromLocalStorage } from './config/auth'
import { Register } from './pages/Register'

type PrivateRouteProps = {
  children: JSX.Element
}

export const PrivateRoutes = ({ children }: PrivateRouteProps) => {
  const userData = getTokenFromLocalStorage()

  if (userData?.token) {
    return children
  }
  removeTokenFromLocalStorage()
  return <Navigate to="/login" />
}

const RoutesProvider = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          //@ts-ignore
          <Login />
        }
      />

      <Route
        path="/register"
        element={
          //@ts-ignore
          <Register />
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <DashBoard />
          </PrivateRoutes>
        }
      >
        <Route path="/user" element={<div></div>} />
        <Route path="/links" element={<Links />} />
      </Route>
    </Routes>
  )
}

export default RoutesProvider
