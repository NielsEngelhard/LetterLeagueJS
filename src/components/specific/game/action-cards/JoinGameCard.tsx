import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function JoinGameCard() {
    return (
        <Card>
            <h2 className="font-semibold text-xl mb-4">Join with Code</h2>
            <div className="flex gap-3">
                <Input
                placeholder="Enter game code"
                className="flex-1"
                />
                <Button>Join</Button>
            </div>            
        </Card>
    )
}