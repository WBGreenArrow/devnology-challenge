import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login'
import { DashBoard } from './components/DashBoard'
import { Links } from './pages/Links'
import { getTokenFromLocalStorage, removeTokenFromLocalStorage } from './config/auth'

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
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <DashBoard />
          </PrivateRoutes>
        }
      >
        <Route path="/user" element={<h1>User</h1>} />
        <Route path="/links" element={<Links />} />
      </Route>
    </Routes>
  )
}

export default RoutesProvider
