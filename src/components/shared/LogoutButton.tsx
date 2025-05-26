import { logOut } from "@/features/auth/actions";
import { Button } from "../ui/button";

export default function LogoutButton() {
    async function onLogoutClick() {
        await logOut();
    }

    return (
        <div className="flex justify-between">
            <div></div>
            <Button variant="error" onClick={onLogoutClick}>Logout</Button>
        </div>
    )
}