import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { BKCRoutes } from '../blissfullcravings/routes/BFRoutes';


export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* BrickFactoryApp */}
        <Route path="/*" element={ <BKCRoutes /> } />

    </Routes>
  )
}
