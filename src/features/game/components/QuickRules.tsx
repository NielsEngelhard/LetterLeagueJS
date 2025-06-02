import Card from "@/components/ui/card/card";

export default function QuickRules() {
    return (
        <Card>
            <h3 className="font-medium mb-2">Quick Rules</h3>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Green tiles indicate correct letter in correct position</li>
                <li>Orange tiles indicate correct letter in wrong position</li>
                <li>Gray tiles indicate incorrect letters</li>
            </ul>            
        </Card>      
    )
}