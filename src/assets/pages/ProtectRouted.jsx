import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRouted = () => {
    if(true){
        return <Outlet />
    } else { 
        return <Navigate to='/' />
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectRouted;