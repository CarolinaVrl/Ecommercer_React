import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRouted = () => {
    const token = localStorage.getItem('token')
    if(token){
        return <Outlet />
    } else { 
        return <Navigate to='/login' />
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectRouted;