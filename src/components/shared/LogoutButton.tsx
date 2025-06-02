"use client";

import { useAuth } from "@/features/auth/auth-context";
import { Button } from "../ui/button";

export default function LogoutButton() {
    const { logout } = useAuth();

    function onLogoutClick() {
        logout();
    }

    return (
        <div className="flex justify-between">
            <div></div>
            <Button variant="error" onClick={onLogoutClick}>Logout</Button>
        </div>
    )
}