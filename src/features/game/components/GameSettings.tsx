import SwitchInput from "@/components/form/SwitchInput";
import Card from "@/components/ui/card/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Settings, Keyboard, Speaker, ShieldQuestion } from "lucide-react";

export default function GameSettings() {
    function gameSetting(text: string, Icon: React.ElementType) {
        return (
            <div className="flex items-center justify-between">
            <Label htmlFor={text} className="text-sm flex items-center gap-2">
                <Icon className="w-4 h-4" />
                {text}
            </Label>
            <SwitchInput
                id={text}
                checked={true}
            />
            </div>            
        )
    }

    return (
        <Card>
            <div className="flex gap-2 items-center font-bold">
                <Settings className="w-4 h-4"></Settings> Settings
            </div>

            <div className="my-1">
                <Separator />
            </div>

            <div className="flex flex-col gap-2">
                  {gameSetting("Native Keyboard", Keyboard)}
                  {gameSetting("Sound Effects", Speaker)}
                  {gameSetting("Show Hints", ShieldQuestion)}
            </div>
        </Card>
    )
}