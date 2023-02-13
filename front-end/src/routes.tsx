import { Routes, Route, Navigate } from 'react-router-dom'
import { Authentication } from './pages/Login'
import { DashBoard } from './components/DashBoard'
import { Links } from './pages/Links'

type PrivateRouteProps = {
  children: JSX.Element
}

export const PrivateRoutes = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = true

  if (isAuthenticated) {
    return children
  }

  return <Navigate to="/login" />
}

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/login" element={<Authentication />} />

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
