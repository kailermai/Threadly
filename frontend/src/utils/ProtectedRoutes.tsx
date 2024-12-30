import { Outlet, Navigate } from "react-router-dom";

export function ProtectedRoutes(props: {name: string}) {
    return props.name ? <Outlet /> : <Navigate to="/login" />
}