import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth'
import { HerosRoutes } from '../heroes/routes/HerosRoutes';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="/*" element={<HerosRoutes />}></Route>
      </Routes>
    </>
  );
};
