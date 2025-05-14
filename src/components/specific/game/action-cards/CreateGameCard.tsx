import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function CreateGameCard() {
    return (
        <Card centerContent={true}>
            <div>
                <h2 className="font-semibold text-xl mb-2">Create Game</h2>
                <p className="text-muted-foreground mb-4">
                    Host your own private or public game with custom settings.
                </p>
                <Button size="lg" className="px-8">Create Game</Button>                  
            </div>
        </Card>     
    )
}