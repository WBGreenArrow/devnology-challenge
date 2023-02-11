import { Routes, Route, Navigate } from 'react-router-dom'
import { Authentication } from './pages/Authentication'

type PrivateRouteProps = {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = true

  if (isAuthenticated) {
    return children
  }

  return <Navigate to="/auth" />
}

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Authentication />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <h1>Teste</h1>
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default RoutesProvider
