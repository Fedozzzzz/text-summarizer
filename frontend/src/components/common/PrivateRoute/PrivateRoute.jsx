import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../hooks/authHook';

export default function PrivateRoute() {
    const auth = useAuth();
    return (
        auth.isAuthed ? <Outlet /> : <Navigate to="/login" />
    );
}
